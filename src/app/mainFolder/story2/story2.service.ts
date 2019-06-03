import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { bug } from 'src/app/mainFolder/models/story1.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Story2Service {

  constructor(private http: HttpClient) { }

  createBugs(newB: bug) {
    this.http.post<bug[]>('https://bug-report-system-server.herokuapp.com/bugs', newB);
  }

  getBugById(id): Observable<bug> {
      return this.http.get<bug>('https://bug-report-system-server.herokuapp.com/bugs?sort=reporter,asc' + '/' + id);
  }

}
