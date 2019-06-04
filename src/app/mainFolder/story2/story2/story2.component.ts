import { Component, OnInit } from '@angular/core';
import { bug } from '../../models/story1.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Story2Service } from '../story2.service';
import { NgForm } from '@angular/forms';
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
  model: bug = {
    title: '',
    description: '',
    priority: 0,
    reporter: '',
    status: '',
    createdAt: new Date(),
    id: ''
  };

  // create the values to display in form
  priorities = ['Minor', 'Major', 'Critical'];
  reporters = ['QA', 'PO', 'DEV'];
  statuses = ['Ready for test', 'Done', 'Rejected'];

  // a temporary new bug to post type bug
  newBug: bug;
  editBug: bug ;

  ngOnInit() {
    // get the id from the link in a const aBug and then get the bug with this id
    const aBugId = this.route.snapshot.params.bugId;
     console.log(aBugId);
    // this.story2Service.getBugWithId(aBugId).subscribe((wantedBug) => {
    //   this.editBug = wantedBug;
    // });
    // console.log(this.editBug.title);
    // console.log(this.editBug.priority);
    // console.log(this.editBug.reporter);
    // console.log(this.editBug.status);
    // console.log(this.editBug.id);
    // console.log(this.editBug.createdAt);

  }

  // function that takes the form and put the info of the form to the model type bug
  addBug(form: NgForm) {

    if (form.valid) {

      this.model.title = form.value.bugTitle;
      this.model.description = form.value.bugDescription;
      this.model.reporter = form.value.bugReporter;
      this.model.status = form.value.bugStatus;
      if (form.value.bugPriority === 'Minor') {
        this.model.priority = 3;
      }
      if (form.value.bugPriority === 'Major') {
        this.model.priority = 2;
      }
      if (form.value.bugPriority === 'Critical') {
        this.model.priority = 1;
      }

      // post the  new bug using a function form the story2 service
      this.story2Service.createBugs(this.model);

    }



  }
  // function that navigates you to the home page
  goToMainPage() {
    this.router.navigate(['']);
  }

displayBugInEditPage() {


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
