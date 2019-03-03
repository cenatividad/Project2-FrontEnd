import { Component, OnInit, Input } from '@angular/core';
import { Story } from 'src/app/models/story';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {
  @Input() stories: Array<Story>;

  constructor() { }

  ngOnInit() {
  }

}
