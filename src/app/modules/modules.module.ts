import { DonationModule } from './donation/donation.module';
import { RockInRioModule } from './rock-in-rio/rock-in-rio.module';
import { HomeModule } from './home/home.module';
import { HelpModule } from './help/help.module';
import { AboutHerModule } from './about-her/about-her.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DonationComponent } from './donation/donation.component';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    SharedModule,
    AboutHerModule,
    HelpModule,
    RockInRioModule,
    DonationModule
  ],
  exports: [
    CommonModule,
    HomeModule,
    SharedModule,
    AboutHerModule,
    HelpModule,
    RockInRioModule,
    DonationModule
  ],
  declarations: [],
})
export class ModulesModule {}
