import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { SessionService } from 'src/app/services/sessions.service';
import { Project } from 'src/app/models/project';
import { Router } from '@angular/router';
import { InvitationService } from 'src/app/services/invitation.service';
import { NavigationService } from 'src/app/services/navigation.service';

/**
 * Component for project creation. Holds the necessary input elements.
 */
@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  project = new Project();
  projectName = '';
  description = '';
  user = this.sessionService.getActiveUser();

  creationFailure = false;

  constructor(private projectService: ProjectService,
              private sessionService: SessionService,
              private navigationService: NavigationService,
              private invitationService: InvitationService) { }


  ngOnInit() {

  }

  /**
   * Creates a project based on the input values and has the project service request the creation of the new
   * project. If a valid project is returned in the response, we have the invitation service link the new 
   * project with its creator, and we navigate back to the view we came from.
   */
  newProject() {
    this.project.projectName = this.projectName;
    this.project.description = this.description;
    this.project.projectUsers.push(this.user);

    this.projectService.createProject(this.project).subscribe( (payload: Project) => {
      console.log(payload);
      const credentials = { email : this.user.email, projectID : payload.projectID.toString()};
      this.invitationService.addUserToProject(credentials).subscribe( () => {});
      this.navigationService.navToProject(payload.projectID);
    }, (err) => {
      console.log(err);
      this.creationFailure = true;
    });
  }
}
