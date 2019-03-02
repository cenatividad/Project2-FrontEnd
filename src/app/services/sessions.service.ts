import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { NavigationService } from './navigation.service';
import { CookieService } from 'ngx-cookie-service';
import { Project } from '../models/project';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private activeUser: User;
  private activeUserProjects: Array<Project> = [];

  constructor(private navigationService: NavigationService, private cookieService: CookieService, private userService: UserService) { }

  // Checks for a currently logged in user, logs them out if necessary, and assigns a new user.
  setActiveUser(user: User){
    //TODO rest of the logic
    this.activeUser = user;
    this.fetchActiveUserProjects();
  }

  fetchActiveUserProjects() {
    if (!this.activeUser || !this.activeUser.id) {
      this.activeUserProjects = [];
      return;
    }

    this.userService.getUserProjects(this.activeUser.id).subscribe((payload) => {
      console.log('SessionService: getUserProjects success. ' + payload);
      this.activeUserProjects = payload;
    }, (error) => {
      console.log('SessionService: error' + error);
    });
  }

  // basic get for active user
  getActiveUser(): User {
    return this.activeUser;
  }

  getActiveUserProjects() {
    return this.activeUserProjects;
  }

  // nullifies the current activeUser to prevent potential conflict
  logout(){
    this.cookieService.deleteAll(); //safer to do field by field
    this.setActiveUser(null);
    this.navigationService.navToLogin();
  }
}
