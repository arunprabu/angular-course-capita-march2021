import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Decorator
@Injectable({
  providedIn: 'root'
})
export class ContactService { /* Singleton class */

  CONTACT_REST_API_URL = 'http://jsonplaceholder.typicode.com/users';

  constructor( private http: HttpClient ) { // Dependency Injection

  }

  createContact( formData: any ): any{ // 1. get the data from the comp
    console.log(formData);

    // 2. send the data to the REST API
      // 2.1 What's the REST API?  http://jsonplaceholder.typicode.com/users
      // 2.2 What's the HTTP Method?   POST
      // 2.3 What's the Rest API Client tool?   HttpClient
    return this.http.post(this.CONTACT_REST_API_URL, formData)
      .pipe( map( (res: any ) => { // 3. get the resp from the REST API
        console.log(res);
        return res; // 4. send it back to the comp
      }));
  }
}
