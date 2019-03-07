import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/sessions.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  projects() {
    return this.sessionService.getActiveUserProjects();
  }

  constructor(private sessionService: SessionService, private navigationService: NavigationService) { }

  ngOnInit() {
  }

  logout() {
    this.sessionService.logout();
  }

  navToProject(id: number) {
    this.navigationService.navToProject(id);
  }
}
