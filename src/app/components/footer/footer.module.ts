import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';
import { SocialBarModule } from '../social-bar/social-bar.module';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    SocialBarModule
  ],
  exports:[FooterComponent]
})
export class FooterModule { }
