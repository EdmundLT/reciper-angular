import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
interface IRegisterForm {
  username: string;
  password: string;
  email: string;
}

interface IRegisterResponse {
  userId: string;
  username: string;
  email: string;
  passwordHash: string;
  passwordSalt: string;
  status: number;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  private readonly _baseUrl: string = `${environment.apiUrl}/auth`;
  register(registerForm: IRegisterForm): Observable<IRegisterResponse> {
    return this.http.post<IRegisterResponse>(
      `${this._baseUrl}/register`,
      registerForm
    );
  }
}
