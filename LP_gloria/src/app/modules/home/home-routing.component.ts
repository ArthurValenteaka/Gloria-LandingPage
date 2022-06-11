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
    pathMatch: 'full',
  },
  {
    path: 'sobre',
    loadChildren: () => import('./../about-her/about-her.module').then(e => e.AboutHerModule),
    pathMatch: 'full',
  },
  {
    path: 'voluntario',
    loadChildren: () => import('./../voluntary/voluntary.module').then(e => e.VoluntaryModule),
    pathMatch: 'full',
  },
  {
    path: 'projetos',
    loadChildren: () => import('./../projects/projects.module').then(e => e.ProjectsModule),
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
