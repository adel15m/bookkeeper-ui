import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private http: HttpClient) { }

  getSummary()  : Observable<any>{
    return this.http.get<any>("http://localhost:8080/expenses/summary");
  }

  getAll()  : Observable<any>{
    return this.http.get<any>("http://localhost:8080/expenses/getall");
  }
  deleteOne(id: any): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/expenses/delone/${id}`);
  }
  addOne(expense: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/expenses/save', expense);
  }
}
