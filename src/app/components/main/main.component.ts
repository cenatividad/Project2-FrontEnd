import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/sessions.service';
import { NavigationService } from 'src/app/services/navigation.service';

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
  projects() {
    return this.sessionService.getActiveUserProjects();
  }

  constructor(private sessionService: SessionService, private navigationService: NavigationService) { }

  ngOnInit() {
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
