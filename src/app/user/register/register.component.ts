import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  caution: string = '';
  cautionClass: string = '';
  onSubmit() {
    if (this.password != this.confirmPassword) {
      this.caution = 'password should be same as confirm password';
      this.cautionClass = 'text-error';
      return;
    }
    this.userService
      .register({
        username: this.username,
        password: this.password,
        email: this.email,
      })
      .subscribe(
        (response) => {
          console.log(response.status);
          this.router.navigate(['/']);
        },
        (error) => {
          this.caution = error.error;
        }
      );
  }
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  email: string = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}
}
