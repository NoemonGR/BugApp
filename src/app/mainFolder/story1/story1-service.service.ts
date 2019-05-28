import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { bug } from 'src/app/story1.model';


@Injectable({
  providedIn: 'root'
})
export class Story1ServiceService {

  constructor(private http: HttpClient) { }


  getBugs(): Observable<bug[]> {
    return this.http.get<bug[]>('https://bug-report-system-server.herokuapp.com/bugs');

  }
}




