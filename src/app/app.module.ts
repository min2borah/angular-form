import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { AppComponent } from './app.component';
import { FormlyFieldSlider } from './components/formly-field-slider/formly-field-slider.component';

@NgModule({
  declarations: [AppComponent, FormlyFieldSlider],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      types: [{ name: 'slider', component: FormlyFieldSlider }],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
