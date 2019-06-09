import { Component, OnInit } from '@angular/core';
import { Story1ServiceService } from '../story1-service.service';
import { bug } from 'src/app/mainFolder/models/story1.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; 


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

  // search model 

  searchModel = {
   title: '',
   priority: 0,
   status: '',
   reporter : ''
  }

  //create the values to display in search bug form
  priorities = ['Minor', 'Major', 'Critical'];
  reporters = ['QA', 'PO', 'DEV'];
  statuses = ['Ready for test', 'Done', 'Rejected'];

  // variable for the page number of the server we are in
  pageNext = 1 ;
  pagePrev = 1 ;

  // variable of what is the current sorting of the page
  sortingPageStatus = 'title';
  // variable of if the sorting is asc or desc
  ascOrDesc = 'asc';



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
      this.story1ServiceService.getBugsSorted('asc', 'title').subscribe((data) => {
        this.Bugs = data;
      });
      this.titleButtonStatus = 'asc';

    } else {
      this.story1ServiceService.getBugsSorted('desc', 'title').subscribe((data) => {
        this.Bugs = data;
      });
      this.titleButtonStatus = 'desc';
    }
    this.sortingPageStatus = 'title';
    this.pageNext = this.pagePrev = 1;
  }

  // Get data sorted by priority Asc or Desc depending on the previous
  // value of the sort Status  varaiable of the button

  sortByPriority() {
    if (this.priorityButtonStatus === 'desc') {
      this.story1ServiceService.getBugsSorted('asc', 'priority').subscribe((data) => {
        this.Bugs = data;
      });
      this.priorityButtonStatus = 'asc';
    } else {
      this.story1ServiceService.getBugsSorted('desc', 'priority').subscribe((data) => {
        this.Bugs = data;
      });
      this.priorityButtonStatus = 'desc';
    }

    this.sortingPageStatus = 'priority';
    this.pageNext = this.pagePrev = 1;
  }

  // Get data sorted by Reporter Asc or Desc depending on the previous
  // value of the sort Status  varaiable of the button

  sortByReporter() {
    if (this.reporterButtonStatus === 'desc') {
      this.story1ServiceService.getBugsSorted('asc', 'reporter').subscribe((data) => {
        this.Bugs = data;
      });
      this.reporterButtonStatus = 'asc';
    } else {
      this.story1ServiceService.getBugsSorted('desc', 'reporter').subscribe((data) => {
        this.Bugs = data;
      });
      this.reporterButtonStatus = 'desc';
    }

    this.sortingPageStatus = 'reporter';
    this.pageNext = this.pagePrev = 1;
  }

  // Get data sorted by Status Asc or Desc depending on the previous
  // value of the sort Status  varaiable of the button

  sortByStatus() {
    if (this.statusButtonStatus === 'desc') {
      this.story1ServiceService.getBugsSorted('asc', 'status').subscribe((data) => {
        this.Bugs = data;
      });
      this.statusButtonStatus = 'asc';
    } else if (this.statusButtonStatus === 'asc') {
      this.story1ServiceService.getBugsSorted('desc', 'status').subscribe((data) => {
        this.Bugs = data;
      });
      this.statusButtonStatus = 'desc';
    }
    this.sortingPageStatus = 'status';
    this.pageNext = this.pagePrev = 1;
  }

  // Get data sorted by Dat Asc or Desc depending on the previous
  // value of the sort Status  varaiable of the button

  sortByDate() {
    if (this.dateButtonStatus === 'desc') {
      this.story1ServiceService.getBugsSorted('asc', 'createdAt').subscribe((data) => {
        this.Bugs = data;
      });
      this.dateButtonStatus = 'asc';
    } else {
      this.story1ServiceService.getBugsSorted('desc', 'createdAt').subscribe((data) => {
        this.Bugs = data;
      });
      this.dateButtonStatus = 'desc';
    }
    this.sortingPageStatus = 'createdAt';
    this.pageNext = this.pagePrev = 1;
  }

 // navigate to edit page
  goToEditPage() {
    this.router.navigate(['editPage']);
  }

  // navigate to edit page and get the bug id that depends on the button id of the row
  goToEditPageWithBug(buttonId: number) {
  const bugId = this.Bugs[buttonId].id ;
  this.router.navigate(['editPage', bugId]);
  }

  // show on the list the previous 10 bugs on the server which are on next page

  goToPreviousPage() {
    let ascOrDesc: string;

    if (this.sortingPageStatus === 'title') {ascOrDesc = this.titleButtonStatus; }
    if (this.sortingPageStatus === 'priority') {ascOrDesc = this.priorityButtonStatus; }
    if (this.sortingPageStatus === 'status') {ascOrDesc = this.statusButtonStatus; }
    if (this.sortingPageStatus === 'reporter') {ascOrDesc = this.reporterButtonStatus; }
    if (this.sortingPageStatus === 'createdAt') {ascOrDesc = this.dateButtonStatus; }

    if (this.pagePrev >= 0) {
    this.story1ServiceService.getBugsInNextPage(this.pagePrev, this.sortingPageStatus, ascOrDesc).subscribe((data) => {
      this.Bugs = data;

    });

    this.pageNext = this.pagePrev + 1;
    this.pagePrev -= 1 ;

  }
  }

// show on the list the next 10 bugs on the server which are on next page
  goToNextPage() {
    let ascOrDesc: string;


    if (this.sortingPageStatus === 'title') {ascOrDesc = this.titleButtonStatus; }
    if (this.sortingPageStatus === 'priority') {ascOrDesc = this.priorityButtonStatus; }
    if (this.sortingPageStatus === 'status') {ascOrDesc = this.statusButtonStatus; }
    if (this.sortingPageStatus === 'reporter') {ascOrDesc = this.reporterButtonStatus; }
    if (this.sortingPageStatus === 'createdAt') {ascOrDesc = this.dateButtonStatus; }

    this.story1ServiceService.getBugsInNextPage(this.pageNext, this.sortingPageStatus, ascOrDesc).subscribe((data) => {
      this.Bugs = data;

    });

    this.pagePrev = this.pageNext - 1;
    this.pageNext += 1 ;

  }

}
