import { HomeModule } from './home/home.module';
import { HelpModule } from './help/help.module';
import { AboutHerModule } from './about-her/about-her.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    SharedModule,
    AboutHerModule,
    HelpModule
  ],
  exports: [
    CommonModule,
    HomeModule,
    SharedModule,
    AboutHerModule,
    HelpModule
  ],
})
export class ModulesModule {}
