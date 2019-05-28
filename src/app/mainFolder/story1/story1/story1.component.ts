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



  ngOnInit() {
    this.story1ServiceService.getBugs().subscribe((data) => {
      this.Bugs = data;
    });


  }
    sortByKey(Bugs, key) {
      return Bugs.sort((a, b) => {
        const x = a[key]; const y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      });
    }


  }
