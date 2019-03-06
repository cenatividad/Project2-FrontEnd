import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';
import { InvitationService } from '../../services/invitation.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project = new Project();
  statusesToDisplay = ['PENDING', 'DOCKED', 'SOLVING', 'CODING', 'TESTING', 'COMPLETED'];
  projectName = '';
  projectDescription = '';

  invitedUserEmail = '';
  invitationFailed = false;

  projectID: number;

  closeResult: string;

  modalTitle: string;

  constructor(private navigationService: NavigationService,
              private projectService: ProjectService,
              private invitationService: InvitationService,
              private activatedRoute: ActivatedRoute,
              private modalService: NgbModal) { }

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
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.navigationService.navToProject(this.projectID);
    }, (reason) => {
      this.navigationService.navToProject(this.projectID);
      this.closeResult = `Dismissed`;
    });
  }

  openNewStory(content) {
    this.modalTitle = 'Create New Story';
    this.open(content);
    this.navToProjectNewStory();
  }

  openViewDocked(content) {
    this.modalTitle = 'Docked Stories';
    this.open(content);
  }


}
