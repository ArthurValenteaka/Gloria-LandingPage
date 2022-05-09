import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
