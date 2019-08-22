import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export class User {
  public id: string;
  public login: string;
  public name: string;
  public email: string;
  public password: string;

  constructor(id: string, login: string, name: string, email: string, password: string) {
    this.id = id;
    this.login = login;
    this.name = name;
    this.email = email;
    this.password = password;
  }

}

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  login(id: string) {
    localStorage.setItem('currentUser', JSON.stringify({token: Math.random(), name: id}));
  }
  logOut() {
    return localStorage.removeItem('currentUser');
  }
  currentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
  showAllUsers(): Observable<any> {
    return this.http.get('http://localhost:8080/allUsers');
  }
}
