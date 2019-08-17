import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../users/user.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }
  registerUser(user: User): Observable <any> {
    return this.http.post('http://localhost:8080/registration', user);
  }
}
