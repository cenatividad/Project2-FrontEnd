import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/sessions.service';
import { Project } from 'src/app/models/project';
import { UserService } from 'src/app/services/user.service';

/**
 * Component for a detailed list of user projects
 */
@Component({
  selector: 'app-user-projects',
  templateUrl: './user-projects.component.html',
  styleUrls: ['./user-projects.component.css']
})
export class UserProjectsComponent implements OnInit {

  user = this.sessionService.getActiveUser();

  projects = [];

  constructor(private sessionService: SessionService, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserProjects(this.user.id).subscribe((payload) => {
      this.projects = payload;
      // const allProjects = payload;
      // for(let project of allProjects) {}
      // allProjects.foreach(function(project) {
      //   this.projects.push();
      // });      
    }, (err) => {
      console.log(err);
    });
  }

  /**
   * Calls the session service to provide the list of active projects related to the current active user
   */
  getProjects() {
    return this.sessionService.getActiveUserProjects();
  }
}
