import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
  {
    path: 'ajude',
    loadChildren: () => import('./../help/help.module').then(e => e.HelpModule),
    data : {currentPage:'ajude'}
  },
  {
    path: 'sobre',
    loadChildren: () => import('./../about-her/about-her.module').then(e => e.AboutHerModule),
    data : {currentPage:'sobre'}
  },
  {
    path: 'voluntario',
    loadChildren: () => import('./../voluntary/voluntary.module').then(e => e.VoluntaryModule),
    data : {currentPage:'voluntario'}
  },
  {
    path: 'projetos',
    loadChildren: () => import('./../projects/projects.module').then(e => e.ProjectsModule),
    data : {currentPage:'projetos'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
