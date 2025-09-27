import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeProtfolioComponent } from './home-protfolio.component';
import { ProductOneComponent } from './product-one/product-one.component';
import { ServiceOneComponent } from './service-one/service-one.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pages/home' },

  { path: 'home', component: HomeProtfolioComponent},

  { path: 'manhinh-oto', component: ProductOneComponent},

  {path: 'dan-ppf-oto', component: ServiceOneComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class HomeProtfolioRoutingModule { }

