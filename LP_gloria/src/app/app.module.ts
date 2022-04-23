import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { VoluntaryComponent } from './modules/voluntary/voluntary.component';
import { ProjectsComponent } from './modules/projects/projects.component';
import { HelpComponent } from './modules/help/help.component';
import { AboutHimComponent } from './modules/about-him/about-him.component';
import { HomeComponent } from './modules/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VoluntaryComponent,
    ProjectsComponent,
    HelpComponent,
    AboutHimComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
