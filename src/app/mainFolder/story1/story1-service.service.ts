import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { bug } from 'src/app/mainFolder/models/story1.model';


@Injectable({
  providedIn: 'root'
})
export class Story1ServiceService {

  constructor(private http: HttpClient) { }

// Get the data without sort and put them on the private virable http and return it

getBugs(): Observable<bug[]> {
    return this.http.get<bug[]>('https://bug-report-system-server.herokuapp.com/bugs');
  }

  // Get the data sorted by priority (desc) and put them on the private virable http and return it

  getBugsSortedPriorityDesc(): Observable<bug[]> {
    return this.http.get<bug[]>('https://bug-report-system-server.herokuapp.com/bugs?sort=priority,desc');
  }

  // Get the data sorted by title (desc) and put them on the private virable http and return it

  getBugsSortedTitleDesc(): Observable<bug[]> {
        return this.http.get<bug[]>('https://bug-report-system-server.herokuapp.com/bugs?sort=title,desc');
  }

// Get the data sorted by status (desc) and put them on the private virable http and return it

  getBugsSortedStatusDesc(): Observable<bug[]> {
       return this.http.get<bug[]>('https://bug-report-system-server.herokuapp.com/bugs?sort=status,desc');
  }

  // Get the data sorted by reporter (desc) and put them on the private virable http and return it

  getBugsSortedReporterDesc(): Observable<bug[]> {
        return this.http.get<bug[]>('https://bug-report-system-server.herokuapp.com/bugs?sort=reporter,desc');
  }

  // Get the data sorted by priority (asc) and put them on the private virable http and return it

  getBugsSortedPriorityAsc(): Observable<bug[]> {
        return this.http.get<bug[]>('https://bug-report-system-server.herokuapp.com/bugs?sort=priority,asc');
  }

  // Get the data sorted by title (asc) and put them on the private virable http and return it

  getBugsSortedTitleAsc(): Observable<bug[]> {
        return this.http.get<bug[]>('https://bug-report-system-server.herokuapp.com/bugs?sort=title,asc');
  }

  // Get the data sorted by status (asc) and put them on the private virable http and return it

  getBugsSortedStatusAsc(): Observable<bug[]> {
        return this.http.get<bug[]>('https://bug-report-system-server.herokuapp.com/bugs?sort=status,asc');
  }

  // Get the data sorted by reporter (asc) and put them on the private virable http and return it

  getBugsSortedReporterAsc(): Observable<bug[]> {
        return this.http.get<bug[]>('https://bug-report-system-server.herokuapp.com/bugs?sort=reporter,asc');
  }

  createBugs(newBug: bug) {
      this.http.post<bug[]>('https://bug-report-system-server.herokuapp.com/bugs' , newBug).subscribe(responseData => {
        console.log(responseData);
      });
    }

}






