import { Component, OnInit } from '@angular/core';
import { StoryService } from 'src/app/services/story.service';
import { ProjectService } from 'src/app/services/project.service';

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

  addNewStory() {
    this.storyService.addNewStory(this.storyName, this.storyDescription, this.storyPoints).subscribe((payload) => {
      // Story successfully created
      this.projectService.addStory(payload);
      console.log('New Story Created: ', payload);
    }, (error) => {
      // Failed to create story
      console.log('CreateStoryComponent: Failed to create story. ', error);
    });
  }

  reset() {
    this.storyDescription = '';
    this.storyName = '';
    this.storyPoints = 0;
  }

  cancel() {
    // Things to do when cancel event is called
  }

}
