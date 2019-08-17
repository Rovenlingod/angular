import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export class User {
  public login: string;
  public name: string;
  public email: string;
  public password: string;

  constructor(login: string, name: string, email: string, password: string) {
    this.login = login;
    this.name = name;
    this.email = email;
    this.password = password;
  }

}

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  login(login: string) {
    // console.log(login.toString());
    // console.log(JSON.stringify({token: Math.random(), name: login}));
    localStorage.setItem('currentUser', JSON.stringify({token: Math.random(), name: login}));
  }
  logOut() {
    return localStorage.removeItem('currentUser');
  }
  currentUser() {
    console.log(JSON.parse(localStorage.getItem('currentUser')));
    return JSON.parse(localStorage.getItem('currentUser'));
  }
  showAllUsers(): Observable<any> {
    return this.http.get('http://localhost:8080/allUsers');
  }
}
