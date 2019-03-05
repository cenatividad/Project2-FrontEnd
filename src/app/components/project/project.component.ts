import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';
import { InvitationService } from '../../services/invitation.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project = new Project();
  statusesToDisplay = ['PENDING', 'DOCKED', 'SOLVING', 'CODING', 'TESTING'];
  projectName = '';
  projectDescription = '';

  invitedUserEmail = '';
  invitationFailed = false;

  projectID: number;

  constructor(private navigationService: NavigationService,
              private projectService: ProjectService,
              private invitationService: InvitationService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( (params) => {
      this.projectID = params.id;
      this.getProject();
    });
  }

  inviteUser() {
    const credentials = {email: this.invitedUserEmail, projectID: this.projectID };
    this.invitationService.addUserToProject(credentials).subscribe( (payload) => {
      console.log(payload);
    },
    (err) => {
      this.invitationFailed = true;
    });
  }

  getProject() {
    this.projectService.viewProject(this.projectID).subscribe( (payload) => {
      for (const key in payload) {
        if (payload.hasOwnProperty(key)) {
          this.project = payload;
          this.projectName = this.project.projectName;
          this.projectDescription = this.project.description;
          this.projectService.setCurrentProject(payload);
        }
      }
      this.fetchProjectStories();
    }, (err) => console.log(err));
  }

  navToProjectNewStory() {
    this.navigationService.navToProjectNewStory(this.projectID);
  }

  fetchProjectStories() {
    if (!this.project || !this.project.projectID) {
      return;
    }
    this.projectService.fetchProjectStories(this.project.projectID).subscribe((payload) => {
      this.projectService.setStories(payload);
      console.log('ProjectComponent: stories fetched: ' + payload);
    }, (error) => {
      console.log('ProjectComponent: fetchProjectStories error: ' + error);
    });
  }

  filteredProjectStories() {
    return this.projectService.storiesByStatus;
  };
}
