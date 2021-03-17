import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ContactsComponent } from './components/contacts.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';

// Configuring Child Routes / Nested Routes
const routes: Routes = [
  {
    path: 'contacts', children: [
      { path: '', component: ContactsComponent },
      { path: 'add', component: AddContactComponent },
      { path: ':contactId', component: ContactDetailsComponent } //  contactId is the URL Param
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // registering child / nested routes
  ],
  exports: [
    RouterModule
  ]
})
export class ContactsRoutingModule { }
