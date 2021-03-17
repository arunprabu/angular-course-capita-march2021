import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class='container'>
      <h1>404 - Page Not Found</h1>
      <p>Seems like you have landed on invalid url</p>
      <a routerLink='/' class='btn btn-primary'>Go to Home Page</a>
    </div>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
