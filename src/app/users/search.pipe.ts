import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(users: any[], login: any, name: any, email: any): any[] {
    if (!login && !name && !email) { return users; }
    return users.filter(user => {
      return user.login.includes(login) && user.name.includes(name) && user.email.includes(email);
    });
  }
}
