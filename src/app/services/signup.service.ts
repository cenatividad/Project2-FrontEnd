import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

/**
 * Service to handle business logic related to the sign up process.
 */
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient: HttpClient) { }
  signupURI: string = 'users';

  /**
   * Change the user, return an observable and have the component subscribe to it.
   */
  signup(user: User): Observable<Object>{
    // send stuff to server, it returns an observable  
    console.log("Signup Service: Signing up " + user);
    const obs = this.httpClient.post<User>(environment.APIbase + this.signupURI, user);
    return obs;
  }

  /**
   * Verifies that the passwords match.
   */
  checkPasswords(password: string, passwordVerification: string): boolean {
    return password === passwordVerification;
  }

  /**
   * Checks username for not being null/undefined or empty
   */
  usernameOK(username: string): boolean{
    if(username && username !== ''){
      return true;
    } else{
      return false;
    }
  }

  /**
   * Checks password for not being null/undefined or empty
   */
  passwordOK(password: string, passwordVerification: string): boolean{
    if(password && password !== '' && this.checkPasswords(password, passwordVerification)){
      return true;
    } else{
      return false;
    }
  }

  /**
   * Checks name for not being null/undefined or empty
   */
  emailOK(email: string): boolean{
    email = email || '';

    if(email !== ''){
      return true;
    } else{
      return false;
    }
  }

  /**
   * Checks first name for not being null/undefined or empty
   */
  nameOK(firstName: string, lastName: string): boolean{
    firstName = firstName || '';
    lastName = lastName || '';

    if(firstName !== '' && lastName != ''){
      return true;
    } else{
      return false;
    }
  }

  /**
   * Verifies that the passed inputs are correct.
   */
  checkInput(username: string, password: string, passwordVerification: string, email: string,
    firstName: string, lastName: string): boolean{
      return(this.usernameOK(username) && this.passwordOK(password, passwordVerification) &&
             this.emailOK(email) && this.nameOK(firstName, lastName));
    
  }
}
