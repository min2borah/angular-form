import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { AppComponent } from './app.component';
import { FormlyFieldSlider } from './components/formly-field-slider/formly-field-slider.component';
import { DatePickerDirective } from './components/date-picker/date-picker.directive';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { FieldsetWrapper } from './wrappers/fieldset-wrapper/fieldset-wrapper.component';
import { LabelWrapper } from './wrappers/label-wrapper/label-wrapper.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DateTimePickerComponent } from './components/date-time-picker/date-time-picker.component';
import { DateTimeComponent} from './components/date-time-picker/date-time.component';
import { TimePickerComponent } from './components/time-picker/time-picker.component';
import { FormlyFieldTabs } from './components/tabs.type';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent, 
    FormlyFieldSlider, 
    DatePickerComponent, 
    DatePickerDirective, 
    FieldsetWrapper, 
    LabelWrapper, 
    DateTimePickerComponent, 
    TimePickerComponent , 
    DateTimeComponent, 
    FormlyFieldTabs
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FormlyBootstrapModule,
    MatTabsModule,
    FormlyModule.forRoot({
      types: [
        { 
          name: 'slider', 
          component: FormlyFieldSlider 
        },
        { 
          name: 'date',
          component: DatePickerComponent,
          wrappers: ['label', 'fieldset'],
        },
        { 
          name: 'time',
          component: TimePickerComponent,
          wrappers: ['label', 'fieldset'],
        },
        { 
          name: 'datetime',
          component: DateTimeComponent,
          wrappers: ['label', 'fieldset'],
        },
        { 
          name: 'tabs', 
          component: FormlyFieldTabs 
        },
      ],
      wrappers: [
        { name: 'label', component: LabelWrapper },
        { name: 'fieldset', component: FieldsetWrapper }
      ],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
    NgbModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
