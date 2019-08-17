import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import {RouterModule} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {UserService} from './users/user.service';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import {LoginService} from './login/login.service';
import {RegistrationService} from './registration/registration.service';
import { EditComponent } from './edit/edit.component';
import {EditService} from './edit/edit.service';

const routes = [
  {path: 'allUsers', component: UsersComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'edit', component: EditComponent},
  { path: '**', redirectTo: 'allUsers' }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RegistrationComponent,
    LoginComponent,
    EditComponent
  ],
  imports: [
    RouterModule.forRoot(routes), HttpClientModule, FormsModule,
    BrowserModule
  ],
  providers: [UserService, LoginService, RegistrationService, EditService],
  bootstrap: [AppComponent]
})
export class AppModule { }
