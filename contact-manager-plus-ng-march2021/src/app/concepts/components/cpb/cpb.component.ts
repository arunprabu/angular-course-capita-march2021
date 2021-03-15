import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: [
  ]
})
export class CpbComponent implements OnInit {

  // Step 1 of CPB: Create a custom property
  @Input() age = 20; // Step 1 continues... @Input() makes age as custom property
  // TODO: learn about @Input() with alias

  constructor() { }

  ngOnInit(): void {
  }

}
