import { HelpRoutingModule } from './help-routing.component';
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
    HelpRoutingModule
  ]
})
export class HelpModule { }
