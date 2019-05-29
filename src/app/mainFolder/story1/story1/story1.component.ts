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

  titleButtonStatus = 'desc';
  priorityButtonStatus = 'desc';
  reporterButtonStatus = 'desc';
  statusButtonStatus = 'desc';


  constructor(private story1ServiceService: Story1ServiceService) { }


  ngOnInit() {
    this.story1ServiceService.getBugs().subscribe((data) => {
      this.Bugs = data;
    });
  }

  sortByTitle() {
    if (this.titleButtonStatus === 'desc') {
      this.story1ServiceService.getBugsSortedTitleAsc().subscribe((data) => {
        this.Bugs = data;
      });
      this.titleButtonStatus = 'asc';
    } else {
      this.story1ServiceService.getBugsSortedTitleDesc().subscribe((data) => {
        this.Bugs = data;
      });
      this.titleButtonStatus = 'desc';
    }

  }

  sortByPriority() {
    if (this.priorityButtonStatus === 'desc') {
      this.story1ServiceService.getBugsSortedPriorityAsc().subscribe((data) => {
        this.Bugs = data;
      });
      this.priorityButtonStatus = 'asc';
    } else {
      this.story1ServiceService.getBugsSortedPriorityDesc().subscribe((data) => {
        this.Bugs = data;
      });
      this.priorityButtonStatus = 'desc';
    }
  }

  sortByReporter() {
    if (this.reporterButtonStatus === 'desc') {
      this.story1ServiceService.getBugsSortedReporterAsc().subscribe((data) => {
        this.Bugs = data;
      });
      this.reporterButtonStatus = 'asc';
    } else {
      this.story1ServiceService.getBugsSortedReporterDesc().subscribe((data) => {
        this.Bugs = data;
      });
      this.reporterButtonStatus = 'desc';
    }
  }

  sortByStatus() {
    if (this.statusButtonStatus === 'desc') {
      this.story1ServiceService.getBugsSortedStatusAsc().subscribe((data) => {
        this.Bugs = data;
      });
      this.statusButtonStatus = 'asc';
    } else {
      this.story1ServiceService.getBugsSortedStatusDesc().subscribe((data) => {
        this.Bugs = data;
      });
      this.statusButtonStatus = 'desc';
    }
  }



}
