import { Component, OnInit } from '@angular/core';
import { Story1ServiceService } from '../../story1/story1-service.service';
import { bug } from '../../models/story1.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story2',
  templateUrl: './story2.component.html',
  styleUrls: ['./story2.component.css']
})
export class Story2Component implements OnInit {

  constructor(private story1ServiceService: Story1ServiceService,
              private router: Router) { }



  model = {
    bugTitle : '',
    bugDescription: '',
    bugPriority: '',
    bugReporter: '',
    bugStatus: ''
  };

  priorities = ['Minor', 'Major', 'Critical'];
  reporters = ['QA', 'PO', 'DEV'];
  statuses = ['Ready for test', 'Done', 'Rejected'];

  ngOnInit() {
  }

  submitForm(formValue) {
    const dateTimeCreated = new Date();

    const newB: bug = {
      title: formValue.bugTitle,
      description: formValue.bugDescription,
      priority: formValue.bugPriority,
      reporter: formValue.bugReporter,
      createdAt: dateTimeCreated.toString(),
      status: formValue.bugStatus
    };

    console.log(newB);
    this.story1ServiceService.createBugs(newB);
  }

  goToMainPage() {
  this.router.navigate(['']);
}
}
