import { Component, OnInit } from '@angular/core';
import {User, UserService} from '../users/user.service';
import {Router} from '@angular/router';
import {EditService} from './edit.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  login: '';
  password: '';
  name: '';
  email: '';
  error: string;
  response: string;
  user: User;
  constructor(private userService: UserService, private router: Router, private editService: EditService) { }

  ngOnInit() {
    if (this.userService.currentUser() === null) {
      this.router.navigate(['/login']);
    } else {
      this.name = '';
      this.login = '';
      this.password = '';
      this.email = '';
    }
  }

  edit() {
    if (this.login === '' && this.password === '' && this.name === '' && this.email === '') {
      this.error = 'Please fill at least something';
      return;
    }
    this.user = new User(this.userService.currentUser().name, this.login, this.name, this.email, this.password);
    this.editService.edit(this.user).subscribe(e => {
      this.response = e.body.toString();
      if (this.response === 'LOGIN') {
        this.error = 'login is taken';
      } else if (this.response === 'EMAIL') {
        this.error = 'email is taken';
      } else {
        this.router.navigate(['/allUsers']);
      }
    });
    this.login = '';
    this.password = '';
    this.name = '';
    this.email = '';
    this.error = '';
  }
  cancel() {
    this.router.navigate(['/allUsers']);
  }
}
