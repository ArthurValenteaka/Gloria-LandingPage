import { RockInRioComponent } from './rock-in-rio.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RockInRioRoutingModule } from './rock-in-rio-routing.component';



@NgModule({
  declarations: [
    RockInRioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RockInRioRoutingModule
  ]
})
export class RockInRioModule { }
