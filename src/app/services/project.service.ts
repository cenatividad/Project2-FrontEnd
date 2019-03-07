import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Story } from '../models/story';
import { forEach } from '@angular/router/src/utils/collection';

/**
 * Service to handle project-oriented business logic. Holds data related to the currently selected project
 * that the user is interacting with.
 */
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private currentProject: Project;
  private stories: Array<Story>;
  storiesByStatus = {};
  storyStatuses: Array<string> = ['PENDING', 'DOCKED', 'SOLVING', 'CODING', 'TESTING', 'COMPLETED'];

  constructor(private httpClient: HttpClient) { }

  /**
   * Sends a post request to create a new project. Returns an observable of the request
   */
  createProject(project: Project): Observable<any> {
    const url = `${environment.APIbase}project/create`;
    return this.httpClient.post(url, project);
  }

  /**
   * Sends a get request to retrieve a project by ID. Returns an observable of the request.
   */
  viewProject(id: number): Observable<any> {
    const url = `${environment.APIbase}project/${id}`;
    return this.httpClient.get<Project>(url);
  }

  /**
   * Deprecated method.
   * TODO: fix it for new, pertinent use
   */
  viewAllProjects() {
    console.log('ProjectService: Why the hell is this being called?');
    console.log('Dont we want to view all of the projects a user is a part of?');
  }

  /**
   * Returns the URL to be used for story fetching requests
   */
  getFetchStoriesURL(id: number) {
    return `${environment.APIbase}/project/${id}/stories`;
  }

  /**
   * Sends a get request to retrieve the stories related to a project. Returns an observable of the request.
   */
  fetchProjectStories(id: number) {
    return this.httpClient.get<Array<Story>>(this.getFetchStoriesURL(id));
  }

  /**
   * Filters the list of all stories related to the current project based on the list of statuses passed in. 
   * Each status will have its own corresponding array, and all stories with be placed in the corresponding
   * arrays based on their status.
   */
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

  /**
   * Returns a reference to the current active project
   */
  getCurrentProject() {
    return this.currentProject;
  }

  /**
   * Returns a reference to the list of all stories associated with the current active project.
   */
  getStories() {
    return this.stories;
  }

  /**
   * Changes the currently active project to the passed one.
   */
  setCurrentProject(project: Project) {
    this.currentProject = project;
  }

  /**
   * Changes the list of stories associated with the current project. Calls the filter method to update 
   * the sorted lists.
   */
  setStories(stories: Array<Story>) {
    this.stories = stories;
    if (this.stories) {
      this.storiesByStatus = this.filterStoriesByStatus(this.storyStatuses);
    }
  }

  /**
   * Adds a new story to the list of stories associated with the current project.
   */
  addStory(newStory: Story) {
    console.log('ProjectService.addStory called');
    this.stories.push(newStory);
    if (this.storiesByStatus[newStory.status]) {
      console.log('ProjectService.addStory if is true');
      this.storiesByStatus[newStory.status].push(newStory);
    }
  }
}
