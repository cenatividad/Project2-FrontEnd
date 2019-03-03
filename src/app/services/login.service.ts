import { Injectable } from '@angular/core';
import { SessionService } from './sessions.service';
import { User } from '../models/user';
import { NavigationService } from './navigation.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginURI: string = '/users/login';

  constructor(private sessionService: SessionService, private navigationService: NavigationService,
              private httpClient: HttpClient) { }


  // Performs the login service. Requests the server for authentication and proceeds with logic based on success
  // or failure.
  doLogin(username: string, password: string): Observable<User> {
    console.log("LoginService: Logging in " + username + " " + password);

    const user: User = new User();
    user.username = username;
    user.password = password;
    return this.httpClient.post<User>(environment.APIbase + this.loginURI, user);
  }

  // Checks username for not being null/undefined or empty
  usernameOK(username: string): boolean {
    if (username && username !== '') {
      return true;
    } else {
      return false;
    }
  }

  // Checks password for not being null/undefined or empty
  passwordOK(password: string): boolean {
    if (password && password !== '') {
      return true;
    } else {
      return false;
    }
  }

  // Verifies that the passed inputs are correct in some way.
  checkInput(username: string, password: string): boolean {
    return (this.usernameOK(username) && this.passwordOK(password));
  }
}
