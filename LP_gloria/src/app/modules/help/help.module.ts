import { HomeRoutingModule } from './../home/home-routing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HelpComponent } from './help.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HelpComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HelpModule { }
