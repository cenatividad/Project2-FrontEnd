import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor() { }

  // Change the user, return an observable and have the component subscribe to it.
  signup(user: User): boolean{
    // send stuff to server, it returns an observable
    console.log('SignupService: signed up user:');
    console.log(user);
    return true;
  }

  // Verifies that the passwords match.
  checkPasswords(password: string, passwordVerification: string): boolean {
    return password === passwordVerification;
  }


  // Checks username for not being null/undefined or empty
  usernameOK(username: string): boolean{
    if(username && username !== ''){
      return true;
    } else{
      return false;
    }
  }

  // Checks password for not being null/undefined or empty
  passwordOK(password: string, passwordVerification: string): boolean{
    if(password && password !== '' && this.checkPasswords(password, passwordVerification)){
      return true;
    } else{
      return false;
    }
  }

  // Checks password for not being null/undefined or empty
  emailOK(email: string): boolean{
    email = email || '';

    if(email !== ''){
      return true;
    } else{
      return false;
    }
  }

  // Checks password for not being null/undefined or empty
  nameOK(firstName: string, lastName: string): boolean{
    firstName = firstName || '';
    lastName = lastName || '';

    if(firstName !== '' && lastName != ''){
      return true;
    } else{
      return false;
    }
  }

  // Verifies that the passed inputs are correct in some way.
  checkInput(username: string, password: string, passwordVerification: string, email: string,
    firstName: string, lastName: string): boolean{
      return(this.usernameOK(username) && this.passwordOK(password, passwordVerification) &&
             this.emailOK(email) && this.nameOK(firstName, lastName));
    
  }
}
