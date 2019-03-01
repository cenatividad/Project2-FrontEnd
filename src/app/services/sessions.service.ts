import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { NavigationService } from './navigation.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private activeUser: User;

  constructor(private navigationService: NavigationService, private cookieService: CookieService) { }

  // Checks for a currently logged in user, logs them out if necessary, and assigns a new user.
  setActiveUser(user: User){
    //TODO rest of the logic
    this.activeUser = user;
  }

  // basic get for active user
  getActiveUser(): User{
    return this.activeUser;
  }

  // nullifies the current activeUser to prevent potential conflict
  logout(){
    this.cookieService.deleteAll(); //safer to do field by field
    this.setActiveUser(null);
    this.navigationService.navToLogin();
  }
}
