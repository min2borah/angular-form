import {Component} from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css']
})
export class TimePickerComponent extends FieldType {}