import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialBarComponent } from './social-bar.component';

@NgModule({
  declarations: [SocialBarComponent],
  imports: [
    CommonModule
  ],
  exports:[SocialBarComponent]
})
export class SocialBarModule { }
