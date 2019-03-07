import { Component, OnInit } from '@angular/core';
import { StoryService } from 'src/app/services/story.service';
import { ProjectService } from 'src/app/services/project.service';

/**
 * Component used for story creation. Presents the user with forms to provide the necessary information for the
 * story creation.
 */
@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.css']
})
export class CreateStoryComponent implements OnInit {
  storyName: string;
  storyDescription: string;
  storyPoints: number;
  constructor(private storyService: StoryService, private projectService: ProjectService) { }

  ngOnInit() {
    this.reset();
  }

  // checkInput(): boolean {
  //   const output = if(this.storyName.length > 0) {};
  //   return output;

  // }
  /**
   * Calls the story service to request the story creation. If a proper response is received, the story is sent
   * to the project service for storage.
   */
  addNewStory() {
    this.storyService.addNewStory(this.storyName, this.storyDescription, this.storyPoints).subscribe((payload) => {
      // Story successfully created
      this.projectService.addStory(payload);
      this.reset();
      console.log('New Story Created: ', payload);
    }, (error) => {
      // Failed to create story
      console.log('CreateStoryComponent: Failed to create story. ', error);
    });
  }

  /**
   * Resets the fields so that a user can input another story's information and create multiple on the go.
   */
  reset() {
    this.storyDescription = '';
    this.storyName = '';
    this.storyPoints = 0;
  }

  /**
   * Cancel out of the story creation modal. Nothing fancy
   */
  cancel() {
    // Things to do when cancel event is called
  }

}
