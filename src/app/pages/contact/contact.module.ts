import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { TopModule } from 'src/app/components/top/top.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { FormContactModule } from 'src/app/components/form-contact/form-contact.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TopModule,
    FooterModule,
    FormContactModule,
    ContactRoutingModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule {}
