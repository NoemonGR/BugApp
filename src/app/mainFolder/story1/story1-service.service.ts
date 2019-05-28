import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { bug } from 'src/app/mainFolder/story1/story1.model';


@Injectable({
  providedIn: 'root'
})
export class Story1ServiceService {

  constructor(private http: HttpClient) { }


  getBugs(): Observable <bug[]> {
    return this.http.get<bug[]>('https://bug-report-system-server.herokuapp.com/bugs', ) ;
  }

  getBugsSorted(): Observable <bug[]> {
// tslint:disable-next-line: max-line-length
    return this.http.get<bug[]>('https://bug-report-system-server.herokuapp.com/bugs?sort=title,desc&page=0&size=10&title=bug&priority=1&reporter=QA&status=Don', );
  }

}




