import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin(formData: any): void {
    console.log(formData);

    this.authService.login(formData)
      .subscribe((res: any) => {
        console.log(res);
        if (res && res.token) {
          alert('You are successfully authenticated... Redirecting to Home Page!');
          localStorage.setItem('token', res.token);
          this.router.navigate(['']);
        }else{
          alert('You are not authenticated.');
        }
      });
  }
}
