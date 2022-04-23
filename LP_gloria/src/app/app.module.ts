import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { VoluntaryComponent } from './modules/voluntary/voluntary.component';
import { ProjectsComponent } from './modules/projects/projects.component';
import { HelpComponent } from './modules/help/help.component';
import { AboutHerComponent } from './modules/about-her/about-her.component';
import { HomeComponent } from './modules/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VoluntaryComponent,
    ProjectsComponent,
    HelpComponent,
    AboutHerComponent,
    HomeComponent,
    FooterComponent
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
