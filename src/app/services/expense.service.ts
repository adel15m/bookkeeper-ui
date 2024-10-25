import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private http: HttpClient,
              private auth: AuthService) { }

  getSummary()  : Observable<any>{
    return this.http.get<any>("http://localhost:8080/expenses/summary");
  }

  getAll()  : Observable<any>{
    return this.http.get<any>("http://localhost:8080/expenses/getall");
  }
  deleteOne(id: any): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/expenses/delone/${id}`);
  }
  addOne(expense: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/expenses/save', expense);
  }
}
