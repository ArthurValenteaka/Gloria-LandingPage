import { DonationComponent } from './donation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DonationRoutingModule } from './donation-routing.component';



@NgModule({
  declarations: [DonationComponent],
  imports: [
    CommonModule,
    SharedModule,
    DonationRoutingModule
  ]
})
export class DonationModule { }
