import { Component, OnInit, Input } from '@angular/core';
import { Story } from 'src/app/models/story';

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
