import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private activeUser: User;

  constructor() { }

  // Checks for a currently logged in user, logs them out if necessary, and assigns a new user.
  setActiveUser(user: User){
    //TODO rest of the logic
    this.activeUser = user;
  }

  getActiveUser(): User{
    return this.activeUser;
  }

  logout(){
    this.activeUser = null;
  }
}
