import { Component, OnInit } from '@angular/core';
import { bug } from '../../models/story1.model';
import { Router } from '@angular/router';
import { Story2Service } from '../story2.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-story2',
  templateUrl: './story2.component.html',
  styleUrls: ['./story2.component.css']
})
export class Story2Component implements OnInit {

  constructor(private story2Service: Story2Service,
              private router: Router) { }



  model: bug = {
    title: '',
    description: '',
    priority: 0,
    reporter: '',
    status: '',
    createdAt: new Date()
  };

  priorities = ['Minor', 'Major', 'Critical'];
  reporters = ['QA', 'PO', 'DEV'];
  statuses = ['Ready for test', 'Done', 'Rejected'];

  newBug: bug;

  ngOnInit() {
  }

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

      console.log(this.model);

      this.story2Service.createBugs(this.model);

    }



  }

  goToMainPage() {
    this.router.navigate(['']);
  }



}
