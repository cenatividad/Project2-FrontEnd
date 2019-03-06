import { Component, OnInit, Input } from '@angular/core';
import { Story } from 'src/app/models/story';

/**
 * Component for a story card. Provides a way to cearly depict individual stories, each instance of this component
 * holds a reference to the story its displaying.
 */
@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.css']
})
export class StoryCardComponent implements OnInit {
  @Input() story: Story;

  constructor() { }

  ngOnInit() {
  }
}
