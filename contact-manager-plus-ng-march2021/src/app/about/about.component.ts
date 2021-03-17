import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  today: Date;
  randomText = 'Any browser, any OS, anywhere JavaScript runs. Entirely Open Source';

  constructor() {
    this.today = new Date();
  }

  ngOnInit(): void {
  }

}
