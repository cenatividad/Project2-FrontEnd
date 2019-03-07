import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/sessions.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { UserService } from 'src/app/services/user.service';

/**
 * Main component that wraps around all views except the login, which routes to it.
 */
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  /**
   * Requests a list of projects related to the active user from the session service.
   */

  user = this.sessionService.getActiveUser();

  projects = [];

  // projects() {
  //   this.userService.getUserProjects(this.user.id).subscribe((payload) => {
  //     this
  //     return payload;
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }

  constructor(private sessionService: SessionService, private navigationService: NavigationService, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserProjects(this.user.id).subscribe((payload) => {
      this.projects = payload;
    }, (err) => {
      console.log(err);
    });
  }

  /**
   * Requests the session service to log out of the current session
   */
  logout() {
    this.sessionService.logout();
  }

  /**
   * Requests the navigation service to navigate to the view showing the selected project
   */
  navToProject(id: number) {
    this.navigationService.navToProject(id);
  }
}
