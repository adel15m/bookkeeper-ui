import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {

  }

  isLoggedIn(): boolean {
    return this.token.length > 1;
  }

  get token(): string {
    const token = localStorage.getItem("token");
    if (token) return token;
    return "";
  }

  set token(value: string | undefined) {
    if (value) {
      localStorage.setItem("token", value);
    }
  }
}
