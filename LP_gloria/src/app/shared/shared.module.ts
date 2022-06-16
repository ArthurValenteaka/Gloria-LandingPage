import { VideoManifastComponent } from './components/video-manifast/video-manifast.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerHomeComponent } from './components/banner-home/banner-home.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PortalModule } from '@angular/cdk/portal';
import { MatInputModule } from '@angular/material/input';
import { AnalyticsHomeComponent } from './components/analytics-home/analytics-home.component';
import { AboutGloriaComponent } from './components/about-gloria/about-gloria.component';
import { SponsorAreaComponent } from './components/sponsor-area/sponsor-area.component';
import { CultureInfoComponent } from './components/culture-info/culture-info.component';
import { OurProjectsComponent } from './components/our-projects/our-projects.component';
import { HowHelpComponent } from './components/how-help/how-help.component';

const Components = [
  BannerHomeComponent,
  AboutGloriaComponent,
  FooterComponent,
  HeaderComponent,
  AnalyticsHomeComponent,
  SponsorAreaComponent,
  CultureInfoComponent,
  OurProjectsComponent,
  HowHelpComponent,
  VideoManifastComponent,
];

const Angular = [MatButtonModule, MatFormFieldModule, MatInputModule];

const External = [PortalModule];

@NgModule({
  declarations: [Components],
  imports: [Angular, External, CommonModule, RouterModule],
  exports: Components,
})
export class SharedModule {}
