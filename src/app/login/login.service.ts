import { Injectable } from '@angular/core';
import {User} from '../users/user.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  authUser(user: User): Observable <any> {
    return this.http.post('http://localhost:8080/login', user, {observe: 'response'});
  }

}
