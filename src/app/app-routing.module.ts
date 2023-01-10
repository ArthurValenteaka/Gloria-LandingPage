import { DonationModule } from './modules/donation/donation.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
  // {
  //   path: 'rock-in-rio',
  //   loadChildren: () => import('./modules/rock-in-rio/rock-in-rio.module').then(m => m.RockInRioModule),
  // },
  // {
  //   path: 'doacoes',
  //   loadChildren: () => import('./modules/donation/donation.module').then(e => e.DonationModule),
  //   data : {currentPage:'projetos'}
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
