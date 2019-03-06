import { Component, OnInit, Input } from '@angular/core';
import { Story } from 'src/app/models/story';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { StoryService } from 'src/app/services/story.service';

/**
 * Component for a list of stories of a specific status. Holds references to the relevant objects. 
 */
@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {
  @Input() stories: Array<Story>;
  @Input() dropLists: Array<string>;
  @Input() status: string;

  constructor(private storyService: StoryService) { }

  ngOnInit() {
  }

  /**
   * Handles the drop event for the story drag and drop
   */
  drop(event: CdkDragDrop<string[]>) {
    console.log('StoryListComponent: status = ', event, this.status);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      // get story
      const story = this.stories[event.currentIndex];
      // assign new story status
      story.status = this.status;
      console.log('StoryListComponent: ', story);
      // request backend to update data
      this.storyService.updateStory(story).subscribe((payload) => {
        console.log('StoryLstComponent: Story Updated');
      }, (error) => {
        console.log('StoryLstComponent: Story NOT Updated');
      });
    }
  }

}
