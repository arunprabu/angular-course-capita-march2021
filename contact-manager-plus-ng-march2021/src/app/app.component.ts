import { Component } from '@angular/core';

// Unified by @Component
@Component({
  selector: 'app-root', // comp is exposed in a selector -- element selector -- mandatory
  templateUrl: './app.component.html', // html -- template is mandatory -- only one
  styleUrls: ['./app.component.scss'] // css/scss -- can be multiple -- Optional
})
export class AppComponent {
  // ts
  title = 'contact-manager-plus-ng-march2021';
}
