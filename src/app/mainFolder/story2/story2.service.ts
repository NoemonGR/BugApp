import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { bug } from 'src/app/mainFolder/models/story1.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Story2Service {

  constructor(private http: HttpClient) { }


  // function that takes as input a bug and post it to the server
  createBugs(newBug: bug) {
    this.http.post<bug>('https://bug-report-system-server.herokuapp.com/bugs', newBug).subscribe(responseData => {
      console.log(responseData);
    });
  }

  // get a Bug with specific id

  getBugWithId(id): Observable<bug> {
    return this.http.get<bug>('https://bug-report-system-server.herokuapp.com/bugs' + '/' + id);
  }

}
