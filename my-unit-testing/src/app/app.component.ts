import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-unit-testing';

  appName = 'Calculator v1';

  add(a: number, b: number): number{
    return a + b;
  }
}
