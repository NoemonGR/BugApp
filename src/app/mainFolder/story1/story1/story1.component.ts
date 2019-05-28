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
  BugsSortedPriorityDesc: bug[];
  BugsSortedPriorityAsc: bug[];

  constructor(private story1ServiceService: Story1ServiceService) { }



  ngOnInit() {
    this.story1ServiceService.getBugs().subscribe((data) => {
      this.Bugs = data;
    });

    this.story1ServiceService.getBugsSortedPriorityDesc().subscribe((data) => {
      this.BugsSortedPriorityDesc = data;
    });

    this.story1ServiceService.getBugsSortedPriorityAsc().subscribe((data) => {
      this.BugsSortedPriorityAsc = data;
    });


  }
  }
