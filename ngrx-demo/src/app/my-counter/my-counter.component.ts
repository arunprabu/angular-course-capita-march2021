import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../ngrx/counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styles: [
  ]
})
export class MyCounterComponent implements OnInit {

  count$: Observable<number> | undefined;

  constructor(private store: Store<{ count: number }>) {
    // Connect `this.count$` stream to the current store `count` state
    this.count$ = store.select('count');
    console.log(this.count$);
  }

  ngOnInit(): void {
  }

  handleIncrement(): void {
    // Dispatch an increment action
    this.store.dispatch(increment());
  }

  handleDecrement(): void {
    // Dispatch a decrement action
    this.store.dispatch(decrement());
  }

  handleReset(): void {
    // Dispatch a reset action
    this.store.dispatch(reset());
  }

}
