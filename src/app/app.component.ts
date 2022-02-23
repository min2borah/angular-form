import { Component, VERSION } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'Input',
      type: 'input',
      templateOptions: {
        label: 'Input',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
      },
    },
    {
      key: 'Textarea',
      type: 'textarea',
      templateOptions: {
        label: 'Textarea',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
        rows: 3,
      },
    },

    {
      key: 'Checkbox',
      type: 'checkbox',
      templateOptions: {
        label: 'Accept terms',
        description: 'In order to proceed, please accept terms',
        pattern: 'true',
        required: true,
      },
      validation: {
        messages: {
          pattern: 'Please accept the terms',
        },
      },
    },

    {
      key: 'Radio',
      type: 'radio',
      templateOptions: {
        label: 'Radio',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
        options: [
          { value: 1, label: 'Option 1' },
          { value: 2, label: 'Option 2' },
          { value: 3, label: 'Option 3' },
          { value: 4, label: 'Option 4', disabled: true },
        ],
      },
    },

    {
      key: 'Select',
      type: 'select',
      templateOptions: {
        label: 'Select',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
        options: [
          { value: 1, label: 'Option 1' },
          { value: 2, label: 'Option 2' },
          { value: 3, label: 'Option 3' },
          { value: 4, label: 'Option 4', disabled: true },
        ],
      },
    },

    {
      key: 'Slider',
      type: 'slider',
      templateOptions: {
        label: 'Select Range',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
        multiple: true,
        selectAllOption: 'Select All'
      },
    },
    {
      key: 'date',
      type: 'date',
      templateOptions: {
        label: 'date',
        placeholder: 'Enter date',
        required: true,
      }     
    },
    {
      key: 'time',
      type: 'time',
      templateOptions: {
        label: 'Time',
        required: true,
      }     
    },
    // {
    //   key: 'datetime',
    //   type: 'datetime',
    //   templateOptions: {
    //     label: 'Date Time',
    //     required: true,
    //   }     
    // },
    {
      type: 'tabs',
      fieldGroup: [
        {
          templateOptions: { label: 'Personal data' },
          fieldGroup: [
            {
              key: 'firstname',
              type: 'input',
              templateOptions: {
                label: 'First name',
                required: true,
              },
            },
            {
              key: 'age',
              type: 'input',
              templateOptions: {
                type: 'number',
                label: 'Age',
                required: true,
              },
            },
          ],
        },
        {
          templateOptions: { label: 'Destination' },
          fieldGroup: [
            {
              key: 'country',
              type: 'input',
              templateOptions: {
                label: 'Country',
                required: true,
              },
            },
          ],
        },
        {
          templateOptions: { label: 'Day of the trip' },
          fieldGroup: [
            {
              key: 'day',
              type: 'input',
              templateOptions: {
                type: 'date',
                label: 'Day of the trip',
                required: true,
              },
            },
          ],
        },
      ],
    }
  ];
}
