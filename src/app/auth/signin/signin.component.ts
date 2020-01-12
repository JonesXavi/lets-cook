import { AuthService } from './../auth.sevice';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  isLogin: boolean = true;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  toggleForm() {
    this.isLogin = !this.isLogin;
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    if(this.isLogin) {
      this.authService.signInUser(email, password);
    } else {
      this.authService.signUpUser(email, password);
    }
  }
}
