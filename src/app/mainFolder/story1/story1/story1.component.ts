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
  BugsSorted: bug[];

  constructor(private story1ServiceService: Story1ServiceService) { }



  ngOnInit() {
    this.story1ServiceService.getBugs().subscribe((data) => {
      this.Bugs = data;
    });

    this.story1ServiceService.getBugsSorted().subscribe((data) => {
      this.BugsSorted = data;
    });


  }
//       sortByPriority() {
//         this.story1ServiceService.getBugsSorted().subscribe((data) => {
//           this.BugsSorted = data;
//         });
//     }

//     sortyByReporter() {
// // tslint:disable-next-line: only-arrow-functions
//       return this.Bugs.sort(function(a, b) {
//         if (a.title < b.title) { return -1; }
//         if (a.title > b.title) { return 1; }
//         return 0;
//     });

//     }

//     sortyBycreatedAt() {
// // tslint:disable-next-line: only-arrow-functions
//       return this.Bugs.sort(function(a, b) {
//         if (a.title < b.title) { return -1; }
//         if (a.title > b.title) { return 1; }
//         return 0;
//     });

//     }

//     sortyByStatus() {
// // tslint:disable-next-line: only-arrow-functions
//       return this.Bugs.sort(function(a, b) {
//         if (a.title < b.title) { return -1; }
//         if (a.title > b.title) { return 1; }
//         return 0;
//     });

//     }

  }
