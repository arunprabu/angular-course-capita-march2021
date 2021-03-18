import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // access the token from localStorage
    const bearerToken = localStorage.getItem('token');

    // clone the request obj -- in order to modify the req header
    request = request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + bearerToken  // attach the token
      }
    });
    console.log(request);
    return next.handle(request);
  }
}
