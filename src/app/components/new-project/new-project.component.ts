import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { SessionService } from 'src/app/services/sessions.service';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  projectName = '';
  description = '';
  user = this.sessionService.getActiveUser();

  constructor(private projectService: ProjectService, private sessionService: SessionService) { }

  ngOnInit() {

  }

  newProject() {
    let project: Project;
    project.projectName = this.projectName;
    project.description = this.description;
    project.projectUsers.push(this.user);
    this.user.projects.push(project);
    this.projectService.createProject();
  }
}
