import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerHomeComponent } from './components/banner-home/banner-home.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {PortalModule} from '@angular/cdk/portal';
import {MatInputModule} from '@angular/material/input';


const Components = [
  BannerHomeComponent,
  FooterComponent,
  HeaderComponent,
];

const Angular = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
];

const External = [
  PortalModule
]

@NgModule({
  declarations: [Components],
  imports: [
    Angular, External,
    CommonModule,RouterModule],
  exports: Components
})
export class SharedModule {}
