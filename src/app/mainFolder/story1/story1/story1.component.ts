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
  titleButtonStatus = 'asc';
  priorityButtonStatus = 'asc';
  reporterButtonStatus = 'asc';
  statusButtonStatus = 'asc';
  dateButtonStatus = 'asc';
  deleteBugAscOrDesc = 'asc';

  // search model

  searchModel = {
    title: '',
    priority: '',
    status: '',
    reporter: ''
  };

  // create the values to display in search bug form
  priorities = ['Minor', 'Major', 'Critical'];
  reporters = ['QA', 'PO', 'DEV'];
  statuses = ['Ready for test', 'Done', 'Rejected'];

  // variable for the page number of the server we are in
  pageNext = 1;
  pagePrev = 1;

  // variable of what is the current sorting of the page
  sortingPageStatus = 'title';
  // variable of if the sorting is asc or desc
  ascOrDesc = 'desc';
  // variable to check if the Search button is clicked
  searcButtonClicked = false;
  // variable for the page of the
  page = 0;
  pageForDelete = 0;
  priority: string;

  pageNextAscOrDesc: string;
  pagePrevAscOrDesc: string;


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

    this.sortingPageStatus = 'title';
    if (this.titleButtonStatus === 'asc') {this.deleteBugAscOrDesc = 'desc'; }
    if (this.titleButtonStatus === 'desc') {this.deleteBugAscOrDesc = 'asc'; }

    if (this.searcButtonClicked === true) {

      if (this.titleButtonStatus === 'desc') {
// tslint:disable-next-line: max-line-length
        this.story1ServiceService.getSearchedBugs(this.searchModel.title, this.searchModel.reporter, this.searchModel.status, this.priority, this.sortingPageStatus, this.titleButtonStatus, this.page).subscribe((data) => {
          this.Bugs = data;
          this.titleButtonStatus = 'asc';
        });
      } else {
// tslint:disable-next-line: max-line-length
        this.story1ServiceService.getSearchedBugs(this.searchModel.title, this.searchModel.reporter, this.searchModel.status, this.priority, this.sortingPageStatus, this.titleButtonStatus, this.page).subscribe((data) => {
          this.Bugs = data;
          this.titleButtonStatus = 'desc';
        });
      }

    } else {
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
    }
    this.pageNext = this.pagePrev = 1;
    this.pageForDelete = 0;
  }
  // Get data sorted by priority Asc or Desc depending on the previous
  // value of the sort Status  varaiable of the button

  sortByPriority() {
    this.sortingPageStatus = 'priority';
    if (this.priorityButtonStatus === 'asc') {this.deleteBugAscOrDesc = 'desc'; }
    if (this.priorityButtonStatus === 'desc') {this.deleteBugAscOrDesc = 'asc'; }

    if (this.searcButtonClicked === true) {

      if (this.priorityButtonStatus === 'desc') {
// tslint:disable-next-line: max-line-length
        this.story1ServiceService.getSearchedBugs(this.searchModel.title, this.searchModel.reporter, this.searchModel.status, this.priority, this.sortingPageStatus, this.priorityButtonStatus, this.page).subscribe((data) => {
          this.Bugs = data;
          this.priorityButtonStatus = 'asc';
        });
      } else {
// tslint:disable-next-line: max-line-length
        this.story1ServiceService.getSearchedBugs(this.searchModel.title, this.searchModel.reporter, this.searchModel.status, this.priority, this.sortingPageStatus, this.priorityButtonStatus, this.page).subscribe((data) => {
          this.Bugs = data;
          this.priorityButtonStatus = 'desc';
        });
      }

    } else {
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

    }
    this.pageNext = this.pagePrev = 1;
    this.pageForDelete = 0;
  }

  // Get data sorted by Reporter Asc or Desc depending on the previous
  // value of the sort Status  varaiable of the button

  sortByReporter() {

    this.sortingPageStatus = 'reporter';
    if (this.reporterButtonStatus === 'asc') {this.deleteBugAscOrDesc = 'desc'; }
    if (this.reporterButtonStatus === 'desc') {this.deleteBugAscOrDesc = 'asc'; }

    if (this.searcButtonClicked === true) {

      if (this.reporterButtonStatus === 'desc') {
// tslint:disable-next-line: max-line-length
        this.story1ServiceService.getSearchedBugs(this.searchModel.title, this.searchModel.reporter, this.searchModel.status, this.priority, this.sortingPageStatus, this.reporterButtonStatus, this.page).subscribe((data) => {
          this.Bugs = data;
          this.reporterButtonStatus = 'asc';
        });
      } else {
// tslint:disable-next-line: max-line-length
        this.story1ServiceService.getSearchedBugs(this.searchModel.title, this.searchModel.reporter, this.searchModel.status, this.priority, this.sortingPageStatus, this.reporterButtonStatus, this.page).subscribe((data) => {
          this.Bugs = data;
          this.reporterButtonStatus = 'desc';
        });
      }

    } else {
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


    }
    this.pageNext = this.pagePrev = 1;
    this.pageForDelete = 0;
  }
  // Get data sorted by Status Asc or Desc depending on the previous
  // value of the sort Status  varaiable of the button

  sortByStatus() {

    this.sortingPageStatus = 'status';
    if (this.statusButtonStatus === 'asc') {this.deleteBugAscOrDesc = 'desc'; }
    if (this.statusButtonStatus === 'desc') {this.deleteBugAscOrDesc = 'asc'; }

    if (this.searcButtonClicked === true) {

      if (this.statusButtonStatus === 'desc') {
// tslint:disable-next-line: max-line-length
        this.story1ServiceService.getSearchedBugs(this.searchModel.title, this.searchModel.reporter, this.searchModel.status, this.priority, this.sortingPageStatus, this.statusButtonStatus, this.page).subscribe((data) => {
          this.Bugs = data;
          this.statusButtonStatus = 'asc';
        });
      } else {

// tslint:disable-next-line: max-line-length
        this.story1ServiceService.getSearchedBugs(this.searchModel.title, this.searchModel.reporter, this.searchModel.status, this.priority, this.sortingPageStatus, this.statusButtonStatus, this.page).subscribe((data) => {
          this.Bugs = data;
          this.statusButtonStatus = 'desc';
        });
      }

    } else {
      if (this.statusButtonStatus === 'desc') {
        this.story1ServiceService.getBugsSorted('asc', 'status').subscribe((data) => {
          this.Bugs = data;
          this.statusButtonStatus = 'asc';
        });

      } else if (this.statusButtonStatus === 'asc') {
        this.story1ServiceService.getBugsSorted('desc', 'status').subscribe((data) => {
          this.Bugs = data;
          this.statusButtonStatus = 'desc';
        });
      }


    }
    this.pageNext = this.pagePrev = 1;
    this.pageForDelete = 0;
  }

  // Get data sorted by Dat Asc or Desc depending on the previous
  // value of the sort Status  varaiable of the button

  sortByDate() {

    this.sortingPageStatus = 'createdAt';
    if (this.dateButtonStatus === 'asc') {this.deleteBugAscOrDesc = 'desc'; }
    if (this.dateButtonStatus === 'desc') {this.deleteBugAscOrDesc = 'asc'; }

    if (this.searcButtonClicked === true) {

      if (this.dateButtonStatus === 'desc') {
// tslint:disable-next-line: max-line-length
        this.story1ServiceService.getSearchedBugs(this.searchModel.title, this.searchModel.reporter, this.searchModel.status, this.priority, this.sortingPageStatus, this.dateButtonStatus, this.page).subscribe((data) => {
          this.Bugs = data;
        });
        this.dateButtonStatus = 'asc';
      } else if (this.dateButtonStatus === 'asc') {
// tslint:disable-next-line: max-line-length
        this.story1ServiceService.getSearchedBugs(this.searchModel.title, this.searchModel.reporter, this.searchModel.status, this.priority, this.sortingPageStatus, this.dateButtonStatus, this.page).subscribe((data) => {
          this.Bugs = data;
        });
        this.dateButtonStatus = 'desc';
      }

    } else {

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

    }

    this.pageForDelete = 0;
    this.pageNext = this.pagePrev = 1;
  }

  // navigate to edit page
  goToEditPage() {
    this.router.navigate(['editPage']);
  }


  // navigate to edit page and get the bug id that depends on the button id of the row
  goToEditPageWithBug(buttonId: number) {
    const bugId = this.Bugs[buttonId].id;
    this.router.navigate(['editPage', bugId]);
  }

  // show on the list the previous 10 bugs on the server which are on next page

  goToPreviousPage() {

    // if the page is sorted by title put on the ascOrDesc the titleButtonStatus
    if (this.sortingPageStatus === 'title') { this.ascOrDesc = this.titleButtonStatus; }
    if (this.sortingPageStatus === 'priority') { this.ascOrDesc = this.priorityButtonStatus; }
    if (this.sortingPageStatus === 'status') { this.ascOrDesc = this.statusButtonStatus; }
    if (this.sortingPageStatus === 'reporter') { this.ascOrDesc = this.reporterButtonStatus; }
    if (this.sortingPageStatus === 'createdAt') { this.ascOrDesc = this.dateButtonStatus; }
    if (this.ascOrDesc === 'asc') { this.pagePrevAscOrDesc = 'desc'; }
    if (this.ascOrDesc === 'desc') { this.pagePrevAscOrDesc = 'asc'; }

    if (this.searcButtonClicked === true) {

      if (this.pagePrev >= 0) {
// tslint:disable-next-line: max-line-length
        this.story1ServiceService.getSearchedBugs(this.searchModel.title, this.searchModel.reporter, this.searchModel.status, this.priority, this.sortingPageStatus, this.pagePrevAscOrDesc, this.pagePrev).subscribe((data) => {
          this.Bugs = data;
          this.pageNext = this.pagePrev + 1;
          this.pageForDelete = this.pagePrev;
          this.pagePrev -= 1;
        });
      }
    } else {

      if (this.pagePrev >= 0) {
        this.story1ServiceService.getBugsInNextPage(this.pagePrev, this.sortingPageStatus, this.ascOrDesc).subscribe((data) => {
          this.Bugs = data;

        });

        this.pageNext = this.pagePrev + 1;
        this.pageForDelete = this.pagePrev;
        this.pagePrev -= 1;

      }
    }

  }

  // show on the list the next 10 bugs on the server which are on next page
  goToNextPage() {


    if (this.sortingPageStatus === 'title') { this.ascOrDesc = this.titleButtonStatus; }
    if (this.sortingPageStatus === 'priority') { this.ascOrDesc = this.priorityButtonStatus; }
    if (this.sortingPageStatus === 'status') { this.ascOrDesc = this.statusButtonStatus; }
    if (this.sortingPageStatus === 'reporter') { this.ascOrDesc = this.reporterButtonStatus; }
    if (this.sortingPageStatus === 'createdAt') { this.ascOrDesc = this.dateButtonStatus; }
    if (this.ascOrDesc === 'asc') { this.pageNextAscOrDesc = 'desc'; }
    if (this.ascOrDesc === 'desc') { this.pageNextAscOrDesc = 'asc'; }

    if (this.searcButtonClicked === true) {
// tslint:disable-next-line: max-line-length
      this.story1ServiceService.getSearchedBugs(this.searchModel.title, this.searchModel.reporter, this.searchModel.status, this.priority, this.sortingPageStatus, this.pageNextAscOrDesc, this.pageNext).subscribe((data) => {
        this.Bugs = data;
        this.pagePrev = this.pageNext - 1;
        this.pageForDelete = this.pageNext;
        this.pageNext += 1;
      });
    } else {

      this.story1ServiceService.getBugsInNextPage(this.pageNext, this.sortingPageStatus, this.ascOrDesc).subscribe((data) => {
        this.Bugs = data;

      });

      this.pagePrev = this.pageNext - 1;
      this.pageForDelete = this.pageNext;
      this.pageNext += 1;

    }

  }


  // search bugs with certain information from the searchForm

  search(form: NgForm) {

    this.searcButtonClicked = true;

// tslint:disable-next-line: max-line-length
    if (form.value.searchTitle === null || form.value.searchTitle === '') { this.searchModel.title = ''; } else { this.searchModel.title = '&title=' + form.value.searchTitle; }

// tslint:disable-next-line: max-line-length
    if (form.value.searchReporter === null || form.value.searchReporter === '-Select-' || form.value.searchReporter === '') { this.searchModel.reporter = ''; } else { this.searchModel.reporter = '&reporter=' + form.value.searchReporter; }

// tslint:disable-next-line: max-line-length
    if (form.value.searchStatus === null || form.value.searchStatus === '-Select-' || form.value.searchStatus === '') { this.searchModel.status = ''; } else { this.searchModel.status = '&status=' + form.value.searchStatus; }

// tslint:disable-next-line: max-line-length
    if (form.value.searchPriority === null || form.value.searchPriority === '-Select-' || form.value.searchPriority === '') { this.searchModel.priority = '0'; } else {
      if (form.value.searchPriority === 'Minor') { this.searchModel.priority = '3'; }
      if (form.value.searchPriority === 'Major') { this.searchModel.priority = '2'; }
      if (form.value.searchPriority === 'Critical') { this.searchModel.priority = '1'; }
    }

    if (this.searchModel.priority === '1') { this.priority = '&priority=1'; }
    if (this.searchModel.priority === '2') { this.priority = '&priority=2'; }
    if (this.searchModel.priority === '3') { this.priority = '&priority=3'; }
    if (this.searchModel.priority === '0') { this.priority = ''; }


    // if the page is sorted by title put on the ascOrDesc the titleButtonStatus
    if (this.sortingPageStatus === 'title') { this.ascOrDesc = this.titleButtonStatus; }
    if (this.sortingPageStatus === 'priority') { this.ascOrDesc = this.priorityButtonStatus; }
    if (this.sortingPageStatus === 'status') { this.ascOrDesc = this.statusButtonStatus; }
    if (this.sortingPageStatus === 'reporter') { this.ascOrDesc = this.reporterButtonStatus; }
    if (this.sortingPageStatus === 'createdAt') { this.ascOrDesc = this.dateButtonStatus; }

// tslint:disable-next-line: max-line-length
    this.story1ServiceService.getSearchedBugs(this.searchModel.title, this.searchModel.reporter, this.searchModel.status, this.priority, this.sortingPageStatus, this.ascOrDesc, this.page).subscribe((data) => {
      this.Bugs = data;
    });
    this.searchModel.title = form.value.searchTitle ;
    this.pageNext = this.pagePrev = 1;
    this.pageForDelete = 0;
    if (form.value.searchReporter === 'QA') { this.searchModel.reporter = this.reporters[0]; }
    if (form.value.searchReporter === 'PO') { this.searchModel.reporter = this.reporters[1]; }
    if (form.value.searchReporter === 'DEV') { this.searchModel.reporter = this.reporters[2]; }
    if (form.value.searchPriority === 'Minor') { this.searchModel.priority = this.priorities[0]; }
    if (form.value.searchPriority === 'Major') { this.searchModel.priority = this.priorities[1]; }
    if (form.value.searchPriority === 'Critical') { this.searchModel.priority = this.priorities[2]; }
    if (form.value.searchStatus === 'Ready for test') { this.searchModel.status = this.statuses[0]; }
    if (form.value.searchStatus === 'Done') { this.searchModel.status = this.statuses[1]; }
    if (form.value.searchStatus === 'Rejected') { this.searchModel.status = this.statuses[2]; }

  }

  deleteBug(deletedBugId) {
    deletedBugId = this.Bugs[deletedBugId].id;
    if (this.searcButtonClicked === true) {
      this.story1ServiceService.delteBugWithId(deletedBugId).subscribe(() => {
// tslint:disable-next-line: max-line-length
        this.story1ServiceService.getSearchedBugs(this.searchModel.title, this.searchModel.reporter, this.searchModel.status, this.priority, this.sortingPageStatus, this.ascOrDesc, this.pageForDelete).subscribe((data) => {
          this.Bugs = data;
        });
      });

    } else {
      this.story1ServiceService.delteBugWithId(deletedBugId).subscribe(() => {
// tslint:disable-next-line: max-line-length
      this.story1ServiceService.getSearchedBugs('', '', '', '', this.sortingPageStatus, this.deleteBugAscOrDesc, this.pageForDelete).subscribe((data) => {
        this.Bugs = data;
      });
    });

  }
}

  resetButton(form: NgForm) {
    this.searcButtonClicked = false;
    // this.searchModel.priority = '-Select-';
    // this.searchModel.status = '-Select-';
    // this.searchModel.reporter = '-Select-';
    this.ngOnInit();
  }

}
