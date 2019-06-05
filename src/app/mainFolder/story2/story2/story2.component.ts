import { Component, OnInit } from '@angular/core';
import { bug } from '../../models/story1.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Story2Service } from '../story2.service';
import { NgForm } from '@angular/forms';
import { Comment } from '@angular/compiler';
// import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
// import { Observable } from 'rxjs';


@Component({
  selector: 'app-story2',
  templateUrl: './story2.component.html',
  styleUrls: ['./story2.component.css']
})
export class Story2Component implements OnInit {

  constructor(private story2Service: Story2Service,
              private router: Router,
              private route: ActivatedRoute) { }


  // create a model to use in the edit/create bug form
  model = {
    title: '',
    description: '',
    priority: '',
    reporter: '',
    status: '',
    createdAt: new Date(),
    id: ''
  };

  // create a model to use in comments form

  commentModel = {
    id: '',
    reporter: '',
    description: ''
  };


  // create the values to display in edit/create bug form
  priorities = ['Minor', 'Major', 'Critical'];
  reporters = ['QA', 'PO', 'DEV'];
  statuses = ['Ready for test', 'Done', 'Rejected'];

  // a temporary new bug to post (type bug)
  newBug: bug = {
    title: '',
    description: '',
    reporter: '',
    priority: 0,
    status: '',
    id: '',
    createdAt: new Date()

  };

  // a temporary editBug to update
  editBug: bug;
  // commentBug: bug;

// a temporary comment bug to update
  commentBug: bug = {
    title: '',
    description: '',
    reporter: '',
    priority: 0,
    status: '',
    id: '',
    createdAt: new Date(),
    comment: [{
      id: '',
      reporter: '',
      description: ''
    }]
  };

  list;

  // a temp for holding the id of a Bug
  aBugId;

  // get the id from the link in a const aBug and then get the bug with this id
  // and if you are on edit page then call the display function to show the bug
  // in the existing fields in edit/create  bug form
  ngOnInit() {
    // const that shows what was the previous page
    const whatIsthePreviousPage = this.route.snapshot.params.bugId;
    if (whatIsthePreviousPage !== undefined) {
     this.aBugId = this.route.snapshot.params.bugId;
     this.story2Service.getBugWithId(this.aBugId).subscribe((wantedBug) => {
        this.editBug = wantedBug;
        this.displayBugInEditPage(this.editBug);
      });
    }
  }



  // function that takes the form and put the info of the form to the model
  addBug(form: NgForm) {

    if (form.valid) {

      this.model.title = form.value.bugTitle;
      this.model.description = form.value.bugDescription;
      this.model.reporter = form.value.bugReporter;
      this.model.status = form.value.bugStatus;
      if (form.value.bugPriority === 'Minor') {
        this.model.priority = '3';
      }
      if (form.value.bugPriority === 'Major') {
        this.model.priority = '2';
      }
      if (form.value.bugPriority === 'Critical') {
        this.model.priority = '1';
      }

      // put the info of the model in the newBug temp and then post this newBug
      this.newBug.title = this.model.title;
      this.newBug.description = this.model.description;
      this.newBug.id = this.model.id;
      this.newBug.reporter = this.model.reporter;
      this.newBug.status = this.model.status;
      this.newBug.createdAt = this.model.createdAt;

      if (this.model.priority === '3') {
        this.newBug.priority = 3;
      }
      if (this.model.priority === 'Major') {
        this.newBug.priority = 2;
      }
      if (this.model.priority === 'Critical') {
        this.newBug.priority = 1;
      }

      // post or put a bug depending on which page we are
      const whatIsthePreviousPage = this.route.snapshot.params.bugId;
      const bugId = this.route.snapshot.params.bugId;
      // if we are on Report a bug page then create new bug
      if (whatIsthePreviousPage === undefined) {
        this.story2Service.createBugs(this.newBug);
        // if we are on Edit a bug page then update the current bug
      } else {
        this.story2Service.updateBug(this.newBug, bugId);
      }

      // navigate to home Page
      this.goToMainPage();

    }



  }

  // function that navigates you to the home page
  goToMainPage() {
    this.router.navigate(['']);
  }

  // display the bug you want to edit  in the form fields
  displayBugInEditPage(editBug) {

    this.model.title = editBug.title;
    this.model.description = editBug.description;
    this.model.reporter = editBug.reporter;
    this.model.status = editBug.status;
    if (editBug.priority === 1) {
      this.model.priority = this.priorities[2];
    }
    if (editBug.priority === 2) {
      this.model.priority = this.priorities[1];
    }
    if (editBug.priority === 3) {
      this.model.priority = this.priorities[0];
    }

  }
// ---------------- form about comments --------------------------

addComment(commentForm: NgForm) {

  if (commentForm.valid) {

    this.aBugId = this.route.snapshot.params.bugId;
    this.commentModel.description = commentForm.value.commentText;
    this.commentModel.reporter = commentForm.value.commentReporter;
    this.commentModel.id = this.aBugId;
    console.log(this.commentModel);
    this.story2Service.getBugWithId(this.aBugId).subscribe((wantedBug) => {
    this.commentBug = wantedBug;
    console.log(this.commentBug);
    // this.commentBug.comment.push(this.commentModel);
    // this.story2Service.updateBug(this.commentBug, this.aBugId);
    });

    // this.commentModel.description = '';
    // this.commentModel.reporter = '';


}

}

}
