import { AboutHerRoutingModule } from './about-her-routing.component';
import { AboutHerComponent } from './about-her.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AboutHerComponent],
  imports: [CommonModule, SharedModule, AboutHerRoutingModule],
})
export class AboutHerModule {}
