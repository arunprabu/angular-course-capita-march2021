import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export const initialState = 0;

const myCounterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return state + 1;
  }),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

export function counterReducer(state: any, action: any): any {
  return myCounterReducer(state, action);
}