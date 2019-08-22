import { Component, OnInit } from '@angular/core';
import {User, UserService} from '../users/user.service';
import {RegistrationService} from './registration.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  login: '';
  password: '';
  repeatPassword: '';
  name: '';
  email: '';
  emailRegExp: RegExp;
  error: string;

  constructor(private userService: UserService, private registrationService: RegistrationService, private router: Router) { }

  ngOnInit() {
    if (this.userService.currentUser() !== null) {
      this.router.navigate(['/allUsers']);
    } else {
      this.name = '';
      this.login = '';
      this.password = '';
      this.repeatPassword = '';
      this.email = '';
    }
  }

  register() {
    this.emailRegExp = new RegExp('^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');
    if (this.login === '' || this.password === '' || this.name === '' || this.email === '' || this.repeatPassword === '') {
      this.error = 'Please fill the form';
      return;
    }
    if (this.password !== this.repeatPassword) {
      this.error = 'Passwords don\'t match';
      return;
    }
    if (!this.emailRegExp.test(this.email)) {
      this.error = 'invalid email';
      return;
    }
    this.registrationService.registerUser(new User('-1', this.login, this.name, this.email, this.password)).subscribe(e => {
      const response = e.body.toString();
      console.log(response);
      if (response === 'LOGIN') {
        this.error = 'login is taken';
      } else if (response === 'EMAIL') {
        this.error = 'email is taken';
      } else {
        this.router.navigate(['/login']);
      }
    });
    this.login = '';
    this.password = '';
    this.repeatPassword = '';
    this.name = '';
    this.email = '';
    this.error = '';
  }
  cancel() {
    this.router.navigate(['/login']);
  }
}
