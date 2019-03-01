import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Routes, Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project = new Project();
  projectName = '';
  projectDescription = '';

  constructor(private cookieService: CookieService,
              private router: Router,
              private projectService: ProjectService) { }

  ngOnInit() {
    this.getProject();
    
  }

  getProject() {
    this.projectService.viewProject(parseInt(this.cookieService.get('projectID'))).subscribe( (payload) =>{
      for (const key in payload) {
        if (payload.hasOwnProperty(key)) {
          this.project = payload;
          this.projectName = this.project.projectName;
          this.projectDescription = this.project.description;
        }
      }
    }, (err) => console.log(Error));
  }

}
