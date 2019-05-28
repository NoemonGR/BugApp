import { Component, OnInit } from '@angular/core';
import { Story1ServiceService } from '../story1-service.service';
import { bug } from 'src/app/mainFolder/story1/story1.model';

@Component({
  selector: 'app-story1',
  templateUrl: './story1.component.html',
  styleUrls: ['./story1.component.css']
})
export class Story1Component implements OnInit {
  Bugs: bug[];

  constructor(private story1ServiceService: Story1ServiceService) { }


  ngOnInit() {
    this.story1ServiceService.getBugs().subscribe((data) => {
      this.Bugs = data;
    });
  }


  sortByPriority() {
    this.story1ServiceService.getBugsSortedPriorityAsc().subscribe((data) => {
      this.Bugs = data;
    });
  }

  sortByReporter() {
    this.story1ServiceService.getBugsSortedReporterAsc().subscribe((data) => {
      this.Bugs = data;
    });
  }

  sortByStatus() {
    this.story1ServiceService.getBugsSortedStatusAsc().subscribe((data) => {
      this.Bugs = data;
    });
  }

  sortByTitle() {
    this.story1ServiceService.getBugsSortedTitleAsc().subscribe((data) => {
      this.Bugs = data;
    });
  }

}
