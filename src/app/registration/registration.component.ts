import { Component, OnInit } from '@angular/core';
import {User} from '../users/user.service';
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
  name: '';
  email: '';
  error: string;
  response: string;

  constructor(private registrationService: RegistrationService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    if (this.login === '' || this.password === '' || this.name === '' || this.email === '') {
      this.error = 'Please fill the form';
      return;
    }
    this.registrationService.registerUser(new User(this.login, this.name, this.email, this.password)).subscribe();
    this.login = '';
    this.password = '';
    this.name = '';
    this.email = '';
    this.error = '';
  }
}
