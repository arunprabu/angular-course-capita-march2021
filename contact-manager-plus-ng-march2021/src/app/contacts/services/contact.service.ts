import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IContact } from '../models/icontact';
import { Observable } from 'rxjs';

// Decorator
@Injectable({
  providedIn: 'root'
})
export class ContactService { /* Singleton class */

  private CONTACT_REST_API_URL = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { // Dependency Injection

  }

  createContact(formData: any): Observable<IContact> { // 1. get the data from the comp
    console.log(formData);

    // 2. send the data to the REST API
    // 2.1 What's the REST API?  http://jsonplaceholder.typicode.com/users
    // 2.2 What's the HTTP Method?   POST
    // 2.3 What's the Rest API Client tool?   HttpClient
    return this.http.post(this.CONTACT_REST_API_URL, formData)
      .pipe(map((res: any) => { // 3. get the resp from the REST API
        console.log(res);
        return res; // 4. send it back to the comp
      }));
  }

  getContacts(): Observable<IContact[]> { // 1. get the req from the comp ts
    console.log('Inside getContacts');
    // 2. send the req to the REST API
    // 2.1 What's the REST API URL? http://jsonplaceholder.typicode.com/users
    // 2.2 What's the HTTP Method? GET
    // 2.3. What's the REST API Client tool? HttpClient
    return this.http.get(this.CONTACT_REST_API_URL)
      .pipe(map((res: any) => { // 3. get the res from the REST API
        console.log(res);
        // enrich -- convert to json, filter, remove, sort
        return res; // 4. send the res back to the comp
      }));
  }

  getContactById(contactId: any): Observable<IContact> {
    console.log(contactId);
    const CONTACT_DETAILS_REST_API_URL = `${this.CONTACT_REST_API_URL}/${contactId}`;
    return this.http.get(CONTACT_DETAILS_REST_API_URL)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  updateContact(contactData: any): Promise<IContact> {
    console.log(contactData);

    const UPDATE_CONTACT_REST_API_URL = `${this.CONTACT_REST_API_URL}/${contactData.id}`;

    return this.http.put(UPDATE_CONTACT_REST_API_URL, contactData)
      .toPromise()
      .then( (res: any) => {
        console.log(res);
        return res;
      })
      .catch( (err: any) => {
        console.log(err);
        return err;
      })
      .finally(() => {
        console.log('It is over!');
      });
  }

}
