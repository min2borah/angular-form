import { Component, OnInit, Input, forwardRef, ViewChild, AfterViewInit, Injector, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { NgbTimeStruct, NgbDateStruct, NgbPopoverConfig, NgbPopover, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NgControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DateTimeModel } from './date-time.model';
import { noop } from 'rxjs';

@Component({
    selector: 'date-time-picker',
    templateUrl: './date-time-picker.component.html',
    styleUrls: ['./date-time-picker.component.css'],
    providers: [
        DatePipe,
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DateTimePickerComponent),
            multi: true
        }
    ]
})
export class DateTimePickerComponent implements ControlValueAccessor, OnInit, AfterViewInit {
    @Input()
    dateString: string;

    @Input()
    inputDatetimeFormat = 'dd/MM/yyyy H:mm:ss';
    @Input()
    hourStep = 1;
    @Input()
    minuteStep = 15;
    @Input()
    secondStep = 30;
    @Input()
    seconds = true;

    @Input()
    disabled = false;

    @Input()
    hideTime = false;
    
     showTimePickerToggle = false;

     datetime: DateTimeModel = new DateTimeModel();
    private firstTimeAssign = true;



    @ViewChild(NgbPopover)
    private popover: NgbPopover;

    private onTouched: () => void = noop;
    private onChange: (_: any) => void = noop;

     ngControl: NgControl;

    constructor(private config: NgbPopoverConfig, private inj: Injector, private ref: ChangeDetectorRef, ) {
        config.autoClose = 'outside';
        config.placement = 'auto';
        // ref.detach();
        
    }

    ngOnInit(): void {
        this.ngControl = this.inj.get(NgControl);
    }

    ngAfterViewInit(): void {
        this.popover.hidden.subscribe($event => {
            this.showTimePickerToggle = false;
        });
        
        setInterval(() => {
            this.ref.detectChanges();
            }, 5000);
    }

    writeValue(newModel: string) {
        if (newModel) {
            this.datetime = Object.assign(this.datetime, DateTimeModel.fromLocalString(newModel));
            this.dateString = newModel;
            this.setDateStringModel();
        } else {
            this.dateString = '';
            this.ngControl.reset();
            this.firstTimeAssign = true;
            this.datetime = new DateTimeModel();
        }
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    toggleDateTimeState($event) {
        this.showTimePickerToggle = !this.showTimePickerToggle;
        $event.stopPropagation();
    }

    setDisabledState?(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    onInputChange($event: any) {
        console.log('onInputChange');

        const value = $event.target.value;
        console.log(value);
        const dt = DateTimeModel.fromLocalString(value, this.inputDatetimeFormat);

        if (dt) {
            console.log('1');
            this.datetime = dt;
            this.setDateStringModel();
        } else if (value.trim() === '') {
            console.log('2');
            this.datetime = new DateTimeModel();
            this.dateString = '';
            this.onChange(this.dateString);
        } else {
            console.log('3');
            this.onChange(value);
        }
    }

    onDateChange($event: NgbDateStruct) {      
        var dateStr: string;  
        if ($event.year){
          dateStr = `${$event.year}-${$event.month}-${$event.day}`
        }

        const date = DateTimeModel.fromLocalString(dateStr);
   
        if (!date) {
            this.dateString = this.dateString;
            return;
        }

        this.datetime = date;
        this.setDateStringModel();
    }

    onTimeChange(event: NgbTimeStruct) {
        this.datetime.hour = event.hour;
        this.datetime.minute = event.minute;
        this.datetime.second = event.second;

        this.setDateStringModel();
    }

    setDateStringModel() {
        this.dateString = this.datetime.toString();

        if (!this.firstTimeAssign) {
            this.onChange(this.dateString);
        } else {
            // Skip very first assignment to null done by Angular
            if (this.dateString !== null) {
                this.firstTimeAssign = false;
            }
            // MP: CAN I ADD THIS? WHY NOT?
            // without this the first time i select a date it will not be used
            this.onChange(this.dateString);
        }
    }

    inputBlur($event) {
        this.onTouched();
    }
}
