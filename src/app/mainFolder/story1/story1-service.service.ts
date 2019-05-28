import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { bug } from 'src/app/mainFolder/story1/story1.model';


@Injectable({
  providedIn: 'root'
})
export class Story1ServiceService {

  constructor(private http: HttpClient) { }


  getBugs(): Observable<bug[]> {
    return this.http.get<bug[]>('https://bug-report-system-server.herokuapp.com/bugs');
  }

  getBugsSortedPriorityDesc(): Observable<bug[]> {
    // tslint:disable-next-line: max-line-length
    return this.http.get<bug[]>('https://bug-report-system-server.herokuapp.com/bugs?sort=priority,desc');
  }

  getBugsSortedTitleDesc(): Observable<bug[]> {
    // tslint:disable-next-line: max-line-length
    return this.http.get<bug[]>('https://bug-report-system-server.herokuapp.com/bugs?sort=title,desc');
  }

  getBugsSortedStatusDesc(): Observable<bug[]> {
    // tslint:disable-next-line: max-line-length
    return this.http.get<bug[]>('https://bug-report-system-server.herokuapp.com/bugs?sort=status,desc');
  }

  getBugsSortedReporterDesc(): Observable<bug[]> {
    // tslint:disable-next-line: max-line-length
    return this.http.get<bug[]>('https://bug-report-system-server.herokuapp.com/bugs?sort=reporter,desc');
  }

  getBugsSortedPriorityAsc(): Observable<bug[]> {
    // tslint:disable-next-line: max-line-length
    return this.http.get<bug[]>('https://bug-report-system-server.herokuapp.com/bugs?sort=priority,asc');
  }

  getBugsSortedTitleAsc(): Observable<bug[]> {
    // tslint:disable-next-line: max-line-length
    return this.http.get<bug[]>('https://bug-report-system-server.herokuapp.com/bugs?sort=title,asc');
  }

  getBugsSortedStatusAsc(): Observable<bug[]> {
    // tslint:disable-next-line: max-line-length
    return this.http.get<bug[]>('https://bug-report-system-server.herokuapp.com/bugs?sort=status,asc');
  }

  getBugsSortedReporterAsc(): Observable<bug[]> {
    // tslint:disable-next-line: max-line-length
    return this.http.get<bug[]>('https://bug-report-system-server.herokuapp.com/bugs?sort=reporter,asc');
  }


}




