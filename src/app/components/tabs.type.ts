import { Component } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-tabs',
  template: `
  <ul ngbNav #nav="ngbNav"  class="nav-tabs">
    <li *ngFor="let tab of field.fieldGroup; let i = index;" [ngbNavItem]="i">
      <a ngbNavLink>{{tab.templateOptions.label}}</a>
      <ng-template ngbNavContent>
        <formly-field [field]="tab"></formly-field>
      </ng-template>
    </li>
  </ul>
  <div [ngbNavOutlet]="nav" class="mt-2"></div>
`,
})
export class FormlyFieldTabs extends FieldType {
 
}