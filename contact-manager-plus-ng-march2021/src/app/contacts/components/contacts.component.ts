import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IContact } from '../models/icontact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: [
  ]
})
export class ContactsComponent implements OnInit, OnDestroy {

  contactList: IContact[];
  contactsSubscription: Subscription | undefined;

  constructor(private contactService: ContactService) { // 1. connect with the service
    console.log('Inside Constructor');
    this.contactList = [];
  }

  ngOnInit(): void { // lifecycle hook
    console.log('Inside ngOnInit');
    // ngOnInit will be called automatically after constructor whenever this comp comes into view
    // ideal place for us to send REST API Calls

    // 2. send the req to the service
    this.contactsSubscription = this.contactService.getContacts()
      .subscribe((res: IContact[]) => { // 3. get the res from the service
        console.log(res);
        this.contactList = res;
      });
  }

  ngOnDestroy(): void { // lifecycle hook
    // will be called when the comp goes out of the view
    console.log('Inside Destroy');
    // ideal place for us to clear data, clear intervals,  clear timeouts, unsubscribe
    if (this.contactsSubscription) {
      this.contactsSubscription.unsubscribe();
    }
    if (this.contactList && this.contactList.length > 0) {
      this.contactList.length = 0;
    }
  }

}
