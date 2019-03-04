import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

  navToMain() {
    this.router.navigateByUrl('/main');
  }

  navToLogin() {
    this.router.navigateByUrl('');
  }

  navToUserProjects() {
    this.router.navigateByUrl('/main/user-projects');
  }

  navToProject(id: number) {
    this.router.navigateByUrl(`/main/project/${id}`);
  }

  navToProjectNewStory(projectID: number) {
    this.router.navigateByUrl(`/main/project/${projectID}/new-story`)
  }
}
