import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Service to handle navigation logic for the application. All routing goes through this service
 */
@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

  /**
   * Navigates to the main view
   */
  navToMain() {
    this.router.navigateByUrl('/main');
  }

  /**
   * Navigates to the login/signup view
   */
  navToLogin() {
    this.router.navigateByUrl('');
  }

  /**
   * Navigate to the UserProjects view
   */
  navToUserProjects() {
    this.router.navigateByUrl('/main/user-projects');
  }

  /**
   * Navigate to the main project view
   */
  navToProject(id: number) {
    this.router.navigateByUrl(`/main/project/${id}`);
  }

  /**
   * Navigate to the story creation view
   */
  navToProjectNewStory(projectID: number) {
    this.router.navigateByUrl(`/main/project/${projectID}/new-story`)
  }
}
