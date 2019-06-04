import { Component, OnInit } from '@angular/core';
import { bug } from '../../models/story1.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Story2Service } from '../story2.service';
import { NgForm } from '@angular/forms';
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


  // create a model type bug to use in form
  model = {
    title: '',
    description: '',
    priority: '' ,
    reporter: '',
    status: '',
    createdAt: new Date(),
    id: ''
  };

  // create the values to display in form
  priorities = ['Minor', 'Major', 'Critical'];
  reporters = ['QA', 'PO', 'DEV'];
  statuses = ['Ready for test', 'Done', 'Rejected'];

  // a temporary new bug to post (type bug) and an edit bug to uptade
  newBug: bug;
  editBug: bug ;


// get the id from the link in a const aBug and then get the bug with this id
  ngOnInit() {
    // const that shows what was the previous page
     const whatIsthePreviousPage = this.route.snapshot.params.bugId;
     if (whatIsthePreviousPage !== undefined ) {
    const aBugId = this.route.snapshot.params.bugId;
    this.story2Service.getBugWithId(aBugId).subscribe((wantedBug) => {
    this.editBug = wantedBug;
    this.displayBugInEditPage(this.editBug);
     });
    }
     }



  // function that takes the form and put the info of the form to the model type bug
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

      console.log(this.newBug.title);
      this.newBug.title = this.model.title;
      this.newBug.description = this.model.description;
      this.newBug.id = this.model.id ;
      this.newBug.reporter = this.model.reporter;
      this.newBug.status = this.model.status;
      this.newBug.createdAt = this.model.createdAt;

      if (this.model.priority === '3') {
        this.newBug.priority = 3;
      }
      if (this.model.priority === 'Major') {
        this.newBug.priority = 2 ;
      }
      if (this.model.priority === 'Critical') {
        this.newBug.priority = 1 ;
      }

      // post the  new bug using a function form the story2 service
      // const whatIsthePreviousPage = this.route.snapshot.params.bugId;
      // const bugId = this.route.snapshot.params.bugId;
      // if ( whatIsthePreviousPage === undefined) {
      this.story2Service.createBugs(this.newBug);
      // } else {
      //   this.story2Service.updateBug(this.newBug, bugId );
      // }

    }



  }
  // function that navigates you to the home page
  goToMainPage() {
    this.router.navigate(['']);
  }

  // display the editBug in the form
displayBugInEditPage(editBug) {

 this.model.title = editBug.title;
 this.model.description = editBug.description;
 this.model.reporter = editBug.reporter;
 this.model.status = editBug.status;
 if ( editBug.priority === 1) {
   this.model.priority = this.priorities[2];
  }
 if ( editBug.priority === 2) {
    this.model.priority = this.priorities[1];
   }
 if ( editBug.priority === 3) {
    this.model.priority = this.priorities[0];
   }

}

// comment story 4??

// submitComment() {

//   const newComment: Comment = {
//     reporter: commentReporter,
//     description: commentDescription
//   };

//   this.bugs.comments.push(newComment);

//   this.bugService.updateBug(this.bugs, this.id);
//     this.router.navigate(['bugs', this.id]);
// }

}
