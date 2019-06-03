import { Component, OnInit } from '@angular/core';
import { Story1ServiceService } from '../story1-service.service';
import { bug } from 'src/app/mainFolder/models/story1.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-story1',
  templateUrl: './story1.component.html',
  styleUrls: ['./story1.component.css']
})
export class Story1Component implements OnInit {
  Bugs: bug[];

  // variables for checking the sort status of each button
  titleButtonStatus = 'desc';
  priorityButtonStatus = 'desc';
  reporterButtonStatus = 'desc';
  statusButtonStatus = 'desc';
  dateButtonStatus = 'desc' ;


  constructor(private story1ServiceService: Story1ServiceService,
              private router: Router
              ) { }

// on Init get data to Arraey of Bugs and display them
  ngOnInit() {
    this.story1ServiceService.getBugs().subscribe((data) => {
      this.Bugs = data;
    });
  }

  // Get data sorted by title Asc or Desc depending on the previous
  // value of the sort Status  varaiable of the button
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

  // Get data sorted by priority Asc or Desc depending on the previous
  // value of the sort Status  varaiable of the button

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

  // Get data sorted by Reporter Asc or Desc depending on the previous
  // value of the sort Status  varaiable of the button

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

  // Get data sorted by Status Asc or Desc depending on the previous
  // value of the sort Status  varaiable of the button

  sortByStatus() {
    if (this.statusButtonStatus === 'desc') {
      this.story1ServiceService.getBugsSortedStatusAsc().subscribe((data) => {
        this.Bugs = data;
      });
      this.statusButtonStatus = 'asc';
    } else if (this.statusButtonStatus === 'asc') {
      this.story1ServiceService.getBugsSortedStatusDesc().subscribe((data) => {
        this.Bugs = data;
      });
      this.statusButtonStatus = 'desc';
    }
  }

  // Get data sorted by Dat Asc or Desc depending on the previous
  // value of the sort Status  varaiable of the button

  sortByDate() {
    if (this.dateButtonStatus === 'desc') {
      this.story1ServiceService.getBugsSortedDateAsc().subscribe((data) => {
        this.Bugs = data;
      });
      this.dateButtonStatus = 'asc';
    } else {
      this.story1ServiceService.getBugsSortedDateDesc().subscribe((data) => {
        this.Bugs = data;
      });
      this.dateButtonStatus = 'desc';
    }
  }

 // navigate to edit page
  goToEditPage() {
    this.router.navigate(['editPage']);
  }

  // navigate to edit page and get the bug id that depends on the button id of the row
  goToEditPageWithBug(buttonId: number) {

  this.router.navigate(['editPage']);
  const bugSelectedForEdit = this.Bugs[buttonId] ;
  console.log(bugSelectedForEdit.id);
  console.log(bugSelectedForEdit.title);

  }

}
