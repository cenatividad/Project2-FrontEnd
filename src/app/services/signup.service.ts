import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor() { }

  // Change it to return an observable and have the component subscribe to it.
  signup(user: User): boolean{
    // send stuff to server, it returns an observable
    console.log('SignupService: signed up user:');
    console.log(user);
    return true;
  }

  checkPasswords(password: string, passwordVerification: string): boolean{
    return password === passwordVerification;
  }
}
