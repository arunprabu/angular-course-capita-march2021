import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
  ]
})
export class ConceptsComponent implements OnInit {

  // string interpolation related
  appName = 'Contact Manager Plus'; // implicit typing
  isLoggedIn = false;

  // property binding related
  companyName = 'Capita';

  // two way binding related
  courseName = 'Angular';

  // for cpb
  myAge = 25;

  // for CEB
  dataReceivedFromChildComp = '';

  // directives related
  isAuthenticated = false;
  jsFrameworks: Array<string> = [ 'angular js', 'angular 2+', 'ember', 'vuejs'];

  constructor() { }

  ngOnInit(): void {
  }

  // event binding related
  clickMeHandler(event: Event): void {
    console.log(event);
    alert('Clicked.. Open console to see event obj...');

    // TODO: Change the label to 'Clicked' and Disable the button
  }

  // Step 5 of CEB -- work with handler to receive data from child -- event obj will have the data
  profileLoadedHandler(event: string): void{
    console.log(event);
    this.dataReceivedFromChildComp = event;
  }
}
