import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { SessionService } from 'src/app/services/sessions.service';
import { Project } from 'src/app/models/project';
import { Router } from '@angular/router';

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

  constructor(private projectService: ProjectService, private sessionService: SessionService, private router: Router) { }

  ngOnInit() {

  }

  newProject() {
    this.project.projectName = this.projectName;
    this.project.description = this.description;
    this.project.projectUsers.push(this.user);

    this.projectService.createProject(this.project).subscribe( (payload: Project) => {
      console.log(payload);
      this.router.navigateByUrl(`/main/user-projects`);
    }, (err) => {
      console.log(err);
      this.creationFailure = true;
    });
  }
}
