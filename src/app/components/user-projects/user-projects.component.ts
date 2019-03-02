import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/sessions.service';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-user-projects',
  templateUrl: './user-projects.component.html',
  styleUrls: ['./user-projects.component.css']
})
export class UserProjectsComponent implements OnInit {

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
  }

  getProjects() {
    return this.sessionService.getActiveUserProjects();
  }
}
