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

    this.story1ServiceService.getBugsSorted().subscribe((data) => {
      this.Bugs = data;
    });




  }
      sortByPriority() {
      return this.Bugs.sort((a, b) => a.priority - b.priority
      );
    }

    sortyByReporter() {
      return this.Bugs.sort(function(a, b) {
        if (a.title < b.title) { return -1; }
        if (a.title > b.title) { return 1; }
        return 0;
    });

    }

    sortyBycreatedAt() {
      return this.Bugs.sort(function(a, b) {
        if (a.title < b.title) { return -1; }
        if (a.title > b.title) { return 1; }
        return 0;
    });

    }

    sortyByStatus() {
      return this.Bugs.sort(function(a, b) {
        if (a.title < b.title) { return -1; }
        if (a.title > b.title) { return 1; }
        return 0;
    });

    }

  }
