import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: [
  ]
})
export class AddContactComponent implements OnInit {

  isSaved = false;

  // Step 1: LEt's have form tag equivalent on TS side
  addContactForm = new FormGroup({
    // Step 2: have input equivalents on the TS side
    name: new FormControl('arun', Validators.required), // Step 5:  Let's work on Form Validations
    phone: new FormControl('2342153245', Validators.required), // TODO: min length, max length
    email: new FormControl('a@b.com', [Validators.required, Validators.email])
    // Refer TS for Step 3
  });

  constructor(private contactService: ContactService) { // 1. connect with the service class -- dependency injection (DI)

  }

  ngOnInit(): void {
  }

  handleAddContact(): void {
    // console.log(this.addContactForm);  // entire state of the form
    console.log(this.addContactForm.value);

    // 2. send the data to the service
    this.contactService.createContact(this.addContactForm.value)
      .subscribe((res: any) => { // 3 get the resp from the service.
        console.log(res);
        if (res && res.id) {
          this.isSaved = true;
        }
      });
  }

}
