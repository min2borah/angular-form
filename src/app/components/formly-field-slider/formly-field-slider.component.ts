import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-slider',
  template: `
  <div>
      <label for="customRange1" class="form-label" [formlyAttributes]="field">Example range</label>
      <input type="range" class="form-range" id="customRange1" [formlyAttributes]="field">
  </div>
 `,
})
export class FormlyFieldSlider extends FieldType {}
