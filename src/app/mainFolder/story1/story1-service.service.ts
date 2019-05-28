import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Story1ServiceService {

  constructor(private http: HttpClient) { }


  getData(): Observable <any>  {
      return this.http.get('https://bug-report-system-server.herokuapp.com/bugs');
  }
}




