import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
import {User, UserService} from '../users/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: '';
  password: '';
  error: string;
  response: string;
  user: User;
  temp: string;

  constructor(private loginService: LoginService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    if (this.userService.currentUser() !== null) {
      this.router.navigate(['/allUsers']);
    }
  }

  auth() {
    if (this.login === '') {
      this.error = 'login can\'t be empty';
      return;
    }
    if (this.password === '') {
      this.error = 'password can\'t be empty';
      return;
    }
    this.temp = this.login;
    this.user = new User('-1', this.login, '-1', '-1', this.password);
    this.loginService.authUser(this.user).subscribe(e => {
      this.response = e.body.toString();
      if (this.response !== 'null') {
        console.log(this.temp);
        this.userService.login(this.response);
        this.router.navigate(['/allUsers']);
      } else {
        this.error = 'Wrong login or password';
      }
    });
    this.login = '';
    this.password = '';
    this.error = '';
  }
}
