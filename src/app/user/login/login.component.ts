import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  recipes: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(`${environment.apiUrl}/recipe/all`)
      .subscribe((recipes) => (this.recipes = recipes));
  }
}
