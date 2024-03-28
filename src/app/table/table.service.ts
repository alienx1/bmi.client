import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) { }

  historyBmi(): Observable<any>{
    return this.http.get<any>('http://127.0.0.1:9999/v1/api/bmi/history');
  }
}
