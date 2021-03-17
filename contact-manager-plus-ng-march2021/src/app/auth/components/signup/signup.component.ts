import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [
  ]
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  handleSignup(signupFormData: any): void {
    console.log(signupFormData.value);
    this.authService.signup(signupFormData.value)
      .subscribe((res: any) => {
        console.log(res);
        if (res && res.id) {
          alert('Signup Successful');
          this.router.navigate(['login']);
        }
      });
  }
}
