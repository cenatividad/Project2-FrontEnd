import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { NavigationService } from './navigation.service';
import { CookieService } from 'ngx-cookie-service';
import { Project } from '../models/project';
import { UserService } from './user.service';

/**
 * Service used to handle business logic associated with the session. Holds data corresponding to the currently
 * logged in user.
 */
@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private activeUser: User;
  private activeUserProjects: Array<Project> = [];

  constructor(private navigationService: NavigationService, private cookieService: CookieService, private userService: UserService) { }

  /**
   * Checks for a currently logged in user, logs them out if necessary, and assigns a new user
   */
  setActiveUser(user: User) {
    // TODO rest of the logic
    this.activeUser = user;
    this.fetchActiveUserProjects();
  }

  /**
   * Calls the user service to request the server for projects relating to the active user. If the server 
   * responds successfully, update the list of projects.
   */
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

  /**
   * Returns reference to the current active user
   */
  getActiveUser(): User {
    return this.activeUser;
  }

  /**
   * Returns the list of projects associated with the current active user.
   */
  getActiveUserProjects() {
    return this.activeUserProjects;
  }

  /**
   * Ends the current user session. Deletes all relevant cookies, resets the active user, and navigates back
   * to the login
   */
  logout() {
    this.cookieService.deleteAll(); // safer to do field by field
    this.setActiveUser(null);
    this.navigationService.navToLogin();
  }
}
