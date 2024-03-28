import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor(private http: HttpClient) {}

  calculatorBmi(data :any): Observable<any>{
    return this.http.post<any>('http://127.0.0.1:9999/v1/api/bmi/calculator', data);
  }
}
