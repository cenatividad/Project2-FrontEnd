import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Story } from '../models/story';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private currentProject: Project;
  private stories: Array<Story>;
  storiesByStatus = {};
  storyStatuses: Array<string> = ['PENDING', 'DOCKED', 'SOLVING', 'CODING', 'TESTING', 'COMPLETED'];

  constructor(private httpClient: HttpClient) { }

  createProject(project: Project): Observable<any> {
    const url = `${environment.APIbase}project/create`;
    return this.httpClient.post(url, project);
  }

  viewProject(id: number): Observable<any> {
    const url = `${environment.APIbase}project/${id}`;
    return this.httpClient.get<Project>(url);
  }

  viewAllProjects() {
    console.log('ProjectService: Why the hell is this being called?');

    console.log('Dont we want to view all of the projects a user is a part of?');
  }

  getFetchStoriesURL(id: number) {
    return `${environment.APIbase}/project/${id}/stories`;
  }

  fetchProjectStories(id: number) {
    return this.httpClient.get<Array<Story>>(this.getFetchStoriesURL(id));
  }

  filterStoriesByStatus(statuses: Array<string>): object {
    const obj: object = {};

    statuses.forEach((status) => {
      obj[status] = [];
    });

    this.stories.forEach((story) => {
      if (obj[story.status]) {
        obj[story.status].push(story);
      }
    });

    return obj;
  }

  getCurrentProject() {
    return this.currentProject;
  }

  getStories() {
    return this.stories;
  }

  setCurrentProject(project: Project) {
    this.currentProject = project;
  }

  setStories(stories: Array<Story>) {
    this.stories = stories;
    if (this.stories) {
      this.storiesByStatus = this.filterStoriesByStatus(this.storyStatuses);
    }
  }

  addStory(newStory: Story) {
    console.log('ProjectService.addStory called');
    this.stories.push(newStory);
    if (this.storiesByStatus[newStory.status]) {
      console.log('ProjectService.addStory if is true');
      this.storiesByStatus[newStory.status].push(newStory);
    }
  }
}
