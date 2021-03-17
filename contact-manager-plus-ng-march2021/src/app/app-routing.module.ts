import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ConceptsComponent } from './concepts/components/concepts.component';
import { AddContactComponent } from './contacts/components/add-contact/add-contact.component';
import { ContactDetailsComponent } from './contacts/components/contact-details/contact-details.component';
import { ContactsComponent } from './contacts/components/contacts.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

// configure the routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'concepts', component: ConceptsComponent },
  {
    path: 'contacts', children: [
      { path: '', component: ContactsComponent },
      { path: 'add', component: AddContactComponent },
      { path: ':contactId', component: ContactDetailsComponent } //  contactId is the URL Param
    ]
  },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
