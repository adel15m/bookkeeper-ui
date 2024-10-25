import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  user = {
    username: '',
    password: '',
    firstname: '',
    lastname: '',
  };

  constructor(private userService: UserService, private router: Router) {}

  register() {
    const newUser = {
      user: {
        username: this.user.username,
        password: this.user.password,
        firstName: this.user.firstname,
        lastName: this.user.lastname,
      }
    };
    this.userService.register(newUser).subscribe(() => {
      console.log('User created');
      this.router.navigateByUrl('/login');
    });
  }
}
