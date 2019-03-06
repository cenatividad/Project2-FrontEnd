import { Injectable } from '@angular/core';
import { ProjectService } from './project.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Story } from '../models/story';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  updateStoryURI = 'story';

  addProjectStoryURI(projectID: number) {
    return `${environment.APIbase}/project/${projectID}/stories`;
  }

  constructor(private projectService: ProjectService, private httpClient: HttpClient) { }

  addNewStory(storyName: string, storyDescription: string, storyPoints: number): Observable<Story> {
    // Create Story object
    const story = new Story();
    const projectID = this.projectService.getCurrentProject().projectID;

    story.storyName = storyName;
    story.description = storyDescription;
    story.points = storyPoints;
    return this.httpClient.post<Story>(this.addProjectStoryURI(projectID), story);
  }

  updateStory(story: Story): Observable<Story> {
    return this.httpClient.put<Story>(`${environment.APIbase}${this.updateStoryURI}`, story);
  }
}
