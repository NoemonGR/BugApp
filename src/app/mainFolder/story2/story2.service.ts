import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { bug } from 'src/app/mainFolder/models/story1.model';


@Injectable({
  providedIn: 'root'
})
export class Story2Service {

  constructor(private http: HttpClient) { }

  createBugs(newB: bug) {
    this.http.post<bug[]>('https://bug-report-system-server.herokuapp.com/bugs', newB);
  }



}
