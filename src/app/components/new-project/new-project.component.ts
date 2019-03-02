import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { SessionService } from 'src/app/services/sessions.service';
import { Project } from 'src/app/models/project';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { InvitationService } from 'src/app/services/invitation.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  project = new Project;
  projectName = '';
  description = '';
  user = this.sessionService.getActiveUser();

  creationFailure = false;

  constructor(private projectService: ProjectService,
              private sessionService: SessionService,
              private router: Router,
              private cookieService: CookieService,
              private invitationService: InvitationService) { }

  ngOnInit() {

  }

  newProject() {
    this.project.projectName = this.projectName;
    this.project.description = this.description;
    this.project.projectUsers.push(this.user);

    this.projectService.createProject(this.project).subscribe( (payload: Project) => {
      console.log(payload);
      this.cookieService.set('projectID', payload.projectID.toString());
      let credentials = { 'email' : this.user.email, 'projectID' : payload.projectID.toString()};
      this.invitationService.addUserToProject(credentials).subscribe( (payload) => {});
      this.router.navigateByUrl(`/main/project`);
    }, (err) => {
      console.log(err);
      this.creationFailure = true;
    });
  }
}
