import { Component, OnInit } from '@angular/core';
import { Story1ServiceService } from '../story1-service.service';

@Component({
  selector: 'app-story1',
  templateUrl: './story1.component.html',
  styleUrls: ['./story1.component.css']
})
export class Story1Component implements OnInit {

  constructor(private story1: Story1ServiceService) { }

  bugs: Array <any> ;

  ngOnInit() {

    this.story1.getData().subscribe((data) =>
    this.bugs = data);


  }


  sortByKey(bugs, key) {
    return bugs.sort((a, b) => {
        const x = a[key]; const y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}


}
