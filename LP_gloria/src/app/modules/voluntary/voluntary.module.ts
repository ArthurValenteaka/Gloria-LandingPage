import { VoluntaryComponent } from './voluntary.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    VoluntaryComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class VoluntaryModule { }
