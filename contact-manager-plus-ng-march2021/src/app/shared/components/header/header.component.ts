import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartDataService } from '../../services/cart-data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html', // html
  styleUrls: ['./header.component.scss'] // styles
})
export class HeaderComponent implements OnInit {

  cartItemsCount = 0;

  constructor(private router: Router, private cartDataService: CartDataService ) { }

  ngOnInit(): void {
    // Step 3: To Get latest cart items -- let's subscribe from the observable
    this.cartDataService.latestCartItems.subscribe( (value: any[]) => {
      console.log(value);
      this.cartItemsCount = value.length;
    });
  }

  gotoCartPage(): void{
    this.router.navigate(['products', 'cart']);
  }
}
