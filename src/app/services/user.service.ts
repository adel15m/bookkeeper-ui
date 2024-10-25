import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators'
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private router: Router, private auth: AuthService) { }

  register({user}: { user: any }) {
    return this.http.post('http://localhost:8080/user/register', user).pipe(
      tap(() => {
        console.log('User registered successfully');
        this.router.navigateByUrl('/login');
      }),
      catchError((error) => {
        console.error('Error registering user:', error);
        return of(null);
      })
    );
  }

  login({user}: { user: any }) {
    return this.http.post('http://localhost:8080/user/login', user);
  }
}
