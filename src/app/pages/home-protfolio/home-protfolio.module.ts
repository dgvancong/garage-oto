import { CommonModule, DatePipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeProtfolioRoutingModule } from './home-protfolioRouting.module';
import { HomeProtfolioComponent } from './home-protfolio.component';
import { ProductOneComponent } from './product-one/product-one.component';
import { ServiceOneComponent } from './service-one/service-one.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HomeProtfolioRoutingModule,
  ],

  declarations: [
    HomeProtfolioComponent,
    ProductOneComponent,
    ServiceOneComponent
  ],

  providers: [
    DatePipe,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeProtfolioModule {}
