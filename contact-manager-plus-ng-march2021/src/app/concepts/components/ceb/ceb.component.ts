import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: [
  ]
})
export class CebComponent implements OnInit {

  // Step 1 of CEB -- Create an obj of EventEmitter
  @Output() profileLoaded: EventEmitter<string> = new EventEmitter(); // Step 2 of CEB:  make it as Custom Event using @Output()

  constructor() { }

  ngOnInit(): void {
  }

  sendDataToParentCompHandler(): void{
    alert('Sending the data to Parent Comp');
    // Step 3 of CEB: Let's emit the custom event with the data for the parent comp to receive
    this.profileLoaded.emit('Arun');

  }

}
