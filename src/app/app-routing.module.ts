import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pages/home' },
  {
    path: 'pages',
    loadChildren: () => import('./pages/home-protfolio/home-protfolio.module').then((m) => m.HomeProtfolioModule),
    data: { preload: true },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
