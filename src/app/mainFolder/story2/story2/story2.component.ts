import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-story2',
  templateUrl: './story2.component.html',
  styleUrls: ['./story2.component.css']
})
export class Story2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToMainPage() {
  this.router.navigate(['']);
}



}
