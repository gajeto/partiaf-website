import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from 'src/app/singles-components/input/input.module';
import { ButtonModule } from 'src/app/singles-components/button/button.module';
import { LoadingModule } from '../loading/loading.module';
import { FormsModule } from '@angular/forms';
import { FormContactComponent } from './form-contact.component';
import { TextareaModule } from 'src/app/singles-components/textarea/textarea.module';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';

@NgModule({
  declarations: [FormContactComponent],
  imports: [
    CommonModule,
    FormsModule,
    InputModule,
    ButtonModule,
    LoadingModule,
    TextareaModule,
    RecaptchaV3Module
  ],
  providers: [
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: '6Le1nM0ZAAAAAGjtspeqY10WN8krcrt4Ub2KmXEZ' },
  ],
  exports: [FormContactComponent]
})
export class FormContactModule { }
