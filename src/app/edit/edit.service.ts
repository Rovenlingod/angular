import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../users/user.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  constructor(private http: HttpClient) { }
  edit(user: User): Observable <any> {
    return this.http.post('http://localhost:8080/edit', user);
  }
}
