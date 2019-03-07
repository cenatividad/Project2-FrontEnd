import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';
import { InvitationService } from '../../services/invitation.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

/**
 * Main project component that displays the scrum table and enables user to perform project-oriented tasks.
 */
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

  /**
   * Has the invitation service request the server to invite a user to the active project
   */
  inviteUser() {
    const credentials = {email: this.invitedUserEmail, projectID: this.projectID };
    this.invitationService.addUserToProject(credentials).subscribe( (payload) => {
      console.log(payload);
    },
    (err) => {
      this.invitationFailed = true;
    });
  }

  /**
   * Has the project service request the server for a specific project by ID. The responded project is assigned
   * as the current active project in the project service and used by this component
   */
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

  /**
   * Has the navigation service navigate to the modal to add a new story.
   */
  navToProjectNewStory() {
    this.navigationService.navToProjectNewStory(this.projectID);
  }

  /**
   * Has the project service request the server to retrieve all stories related to this project. When responded,
   * the stories are assigned to the project service for further use.
   */
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

  /**
   * Gets the list of filtered and ordered stories from the project service
   */
  filteredProjectStories() {
    return this.projectService.storiesByStatus;
  }

  /**
   * General modal opening code. Opens it, navigates to the view dictating it's contents and returns upon closing
   */
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.navigationService.navToProject(this.projectID);
    }, (reason) => {
      this.navigationService.navToProject(this.projectID);
      this.closeResult = `Dismissed`;
    });
  }

  /**
   * Opens the story creation modal, allowing users to input the data and create a new story for this project.
   * The modal shows the story creation route and we must thus use the navigation service to navigate to it.
   */
  openNewStory(content) {
    this.modalTitle = 'Create New Story';
    this.open(content);
    this.navToProjectNewStory();
  }

  /**
   * Opens the modal for the docked stories. CURRENTLY DEPRECATED
   */
  openViewDocked(content) {
    this.modalTitle = 'Docked Stories';
    this.open(content);
  }
}
