import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  // let's have some default cart items now..
  // but you have to get this kind of details from REST API
  private currentCartItem: any[] = [
    {
      id: 2,
      name: 'Cheese',
      category: 'Dairy',
      price: '$4.5'
    }
  ];

  // Step 1: Create BehaviorSubject with default valud for subscribing first
  private cartItemsList = new BehaviorSubject<any[]>(this.currentCartItem);

  // Step 2: Create Observable for the BehaviourSubject
  // so any comp can subscribe to it
  latestCartItems: Observable<any[]> = this.cartItemsList.asObservable();

  constructor() {
  }

  updateCart(pdt: any): void {
    console.log(pdt);

    this.latestCartItems.pipe( take(1)).subscribe( val => {
      console.log(...val);  // spread operator
      const newArr = [ ...val, pdt ];
      console.log(newArr);
      this.cartItemsList.next(newArr);
    });
  }


}
