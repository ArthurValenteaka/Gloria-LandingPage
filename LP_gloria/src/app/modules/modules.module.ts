import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModulesComponent } from './modules.component';

@NgModule({
  declarations: [
    ModulesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,

  ],
  providers: [],
  bootstrap: [ModulesComponent]
})
export class AppModule { }
