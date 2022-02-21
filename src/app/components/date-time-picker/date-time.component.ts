import {Component} from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'date-time',
  template:`
    <date-time-picker  [formControl]="$any(formControl)" [formlyAttributes]="field" ></date-time-picker>
  `,
})
export class DateTimeComponent extends FieldType {}