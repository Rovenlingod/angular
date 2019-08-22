import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service';
import {Router} from '@angular/router';
import {LoginService} from '../login/login.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<any>;
  login: string;
  searchLogin = '';
  searchName = '';
  searchEmail = '';
  constructor(private userService: UserService, private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    if (this.userService.currentUser() === null) {
      this.router.navigate(['/login']);
    } else {
      this.login = this.userService.currentUser().name;
      this.userService.showAllUsers().subscribe(e => this.users = e);
    }
  }
  logOut() {
    this.userService.logOut();
    this.router.navigate(['/login']);
  }
  toEdit() {
    this.router.navigate(['/edit']);
  }
}
