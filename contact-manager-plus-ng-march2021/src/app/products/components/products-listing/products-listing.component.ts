import { Component, OnInit } from '@angular/core';
import { CartDataService } from 'src/app/shared/services/cart-data.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-listing',
  templateUrl: './products-listing.component.html',
  styles: [
  ]
})
export class ProductsListingComponent implements OnInit {

  productList: any[];

  constructor( private productService: ProductService, private cartDataService: CartDataService) {
    this.productList = [];
  }

  ngOnInit(): void {
    this.productList = this.productService.getProductList();
  }

  handleAddToCart(pdt: any): void {
    console.log(pdt);

    // connecting with cartDataService to update the cart item
    this.cartDataService.updateCart(pdt);
  }

}
