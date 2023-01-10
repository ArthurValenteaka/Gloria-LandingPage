import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DonationComponent } from './donation.component';
const routes: Routes = [
  {
    path: '',
    component: DonationComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonationRoutingModule {}
