import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { Priority } from "src/app/mainFolder/story2/story2/priority.model";

@Component({
  selector: 'app-story2',
  templateUrl: './story2.component.html',
  styleUrls: ['./story2.component.css']
})
export class Story2Component implements OnInit {

  priorities: Priority[] = [
    {id: 1, name: 'QA'},
    {id: 2, name: 'PO'},
    {id: 3, name: 'DEV'}
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToMainPage() {
  this.router.navigate(['']);
}

}
