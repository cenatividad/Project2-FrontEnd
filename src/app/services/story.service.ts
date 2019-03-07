import { Injectable } from '@angular/core';
import { ProjectService } from './project.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Story } from '../models/story';
import { Observable } from 'rxjs';

/**
 * Service to handle business logic pertaining to stories
 */
@Injectable({
  providedIn: 'root'
})
export class StoryService {
  updateStoryURI = 'story';

  /**
   * Returns the URI to be used for story creation requests
   */
  addProjectStoryURI(projectID: number) {
    return `${environment.APIbase}/project/${projectID}/stories`;
  }

  constructor(private projectService: ProjectService, private httpClient: HttpClient) { }

  /**
   * Creates a story based on the input parameters and sends a post request to the server to create the story.
   * Returns an observable of the request.
   */
  addNewStory(storyName: string, storyDescription: string, storyPoints: number): Observable<Story> {
    // Create Story object
    const story = new Story();
    const projectID = this.projectService.getCurrentProject().projectID;

    story.storyName = storyName;
    story.description = storyDescription;
    story.points = storyPoints;
    return this.httpClient.post<Story>(this.addProjectStoryURI(projectID), story);
  }

  /**
   * Sends a put request to the server to update a story. Returns an observable of the request.
   * This is a wholesale update and care should be taken not to pass any null data unless you intend to set the
   * data to null.
   */
  updateStory(story: Story): Observable<Story> {
    return this.httpClient.put<Story>(`${environment.APIbase}${this.updateStoryURI}`, story);
  }
}
