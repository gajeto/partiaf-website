import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TopModule } from 'src/app/components/top/top.module';
import { SocialBarModule } from 'src/app/components/social-bar/social-bar.module';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TopModule,
    FooterModule,
    SocialBarModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {}
