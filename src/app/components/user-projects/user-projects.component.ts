import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/sessions.service';
import { Project } from 'src/app/models/project';

/**
 * Component for a detailed list of user projects
 */
@Component({
  selector: 'app-user-projects',
  templateUrl: './user-projects.component.html',
  styleUrls: ['./user-projects.component.css']
})
export class UserProjectsComponent implements OnInit {

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
  }

  /**
   * Calls the session service to provide the list of active projects related to the current active user
   */
  getProjects() {
    return this.sessionService.getActiveUserProjects();
  }
}
