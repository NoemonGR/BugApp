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

  getBugsSorted(DescOrAsc: string, OrderByWhat: string): Observable<bug[]> {
    return this.http.get<bug[]>('https://bug-report-system-server.herokuapp.com/bugs?sort='+OrderByWhat+','+DescOrAsc);
  }


getBugsInNextPage(page: number, OrderByWhat: string, DescOrAsc: string ): Observable<bug[]> {
  return this.http.get<bug[]>('https://bug-report-system-server.herokuapp.com/bugs?sort='+OrderByWhat+','+DescOrAsc+'&page='+page);
}

getSearchedBugs(title: string, reporter: string, status: string, priority: string,OrderByWhat: string, DescOrAsc: string, page: number ) {
 
 return this.http.get<bug[]>('https://bug-report-system-server.herokuapp.com/bugs?sort='+OrderByWhat+','+DescOrAsc+'&page='+page+title+priority+reporter+status);
}

 delteBugWithId(id) {
 return this.http.delete<bug>('https://bug-report-system-server.herokuapp.com/bugs' + '/' + id);
} 


}



