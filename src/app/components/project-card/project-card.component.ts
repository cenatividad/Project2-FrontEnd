import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/models/project';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: Project;

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
  }

  navToProject(id: number) {
    this.navigationService.navToProject(id);
  }
}
