import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent {
  user = {
    username: '',
    password: '',
  };

  constructor(private userService: UserService, private router: Router) {}

  login() {

    let elementById = document.getElementById("username");
    console.log(elementById);


    this.userService.login({user: this.user}).subscribe(
      (response: any) => {
        console.log('Login successful');
        localStorage.setItem('token', response.token);
        this.router.navigate(['/play']);
      },
      (error) => {
        console.log('Login failed', error);
      }
    );
  }
}
