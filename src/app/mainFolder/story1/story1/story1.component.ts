import { Component, OnInit } from '@angular/core';
import { Story1ServiceService } from '../story1-service.service';
import { bug } from 'src/app/story1.model';

@Component({
  selector: 'app-story1',
  templateUrl: './story1.component.html',
  styleUrls: ['./story1.component.css']
})
export class Story1Component implements OnInit {
  Bugs: bug[];
  constructor(private story1ServiceService: Story1ServiceService) { }

  bugs: Array <any> ;

  ngOnInit() {
    this.story1ServiceService.getBugs().subscribe((data) => {
      this.Bugs = data;
    });



  sortByTitle() {

  }

  sortByPriority() {

  }

  sortByReporter() {

  }

  sortByDate() {

  }

  sortByStatus() {

  }

}
