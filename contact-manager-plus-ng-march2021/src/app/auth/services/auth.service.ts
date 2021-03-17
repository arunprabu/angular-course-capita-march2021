import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(formData: any): any {
    console.log(formData);

    const fakeUserInfo = {
      email: 'eve.holt@reqres.in',
      password: 'pistol'
    };

    return this.http.post('https://reqres.in/api/register', fakeUserInfo)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));

  }

  login(formData: any): any {

    console.log(formData);

    const fakeUserInfo = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    };

    return this.http.post('https://reqres.in/api/login', fakeUserInfo)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  isAuthenticated(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  logout(): void{
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
    }
  }
}
