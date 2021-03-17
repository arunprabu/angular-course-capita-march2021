import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListingComponent } from './components/products-listing/products-listing.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';

// Setup Nested / Child Routes
const routes: Routes = [
  {
    path: 'products', children: [
      { path: '', component: ProductsListingComponent },
      { path: 'cart', component: CartComponent },
      { path: ':id', component: ProductDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)   // registering child routes
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
