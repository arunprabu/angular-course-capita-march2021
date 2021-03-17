import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: [
  ]
})
export class ContactDetailsComponent implements OnInit {

  contactData: any;
  duplicateContactData: any;
  isUpdated = false;

  constructor(private contactService: ContactService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // when this comp comes into view this method will be called
    // ideal lifecycle hook for us to send REST API Calls

    // read URL Param in angular
    const contactId = this.route.snapshot.paramMap.get('contactId');

    this.contactService.getContactById(contactId)
      .subscribe((res: any) => {
        console.log(res);
        this.contactData = res;
      });
  }

  handleEditModalOpen(): void {
    this.duplicateContactData = { ...this.contactData };
    this.isUpdated = false;
  }

  async handleUpdateContact(): Promise<void> {
    console.log(this.duplicateContactData);
    const status = await this.contactService.updateContact(this.duplicateContactData);
    console.log(status);
    if (status && status.id) {
      this.isUpdated = true;
    }
  }
}
