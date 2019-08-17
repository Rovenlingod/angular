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
  name: '';
  email: '';
  error: string;
  response: string;

  constructor(private userService: UserService, private registrationService: RegistrationService, private router: Router) { }

  ngOnInit() {
    if (this.userService.currentUser() !== null) {
      this.router.navigate(['/allUsers']);
    }
  }

  register() {
    if (this.login === '' || this.password === '' || this.name === '' || this.email === '') {
      this.error = 'Please fill the form';
      return;
    }
    this.registrationService.registerUser(new User('-1', this.login, this.name, this.email, this.password)).subscribe();
    this.login = '';
    this.password = '';
    this.name = '';
    this.email = '';
    this.error = '';
  }
}
