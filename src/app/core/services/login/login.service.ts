import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly API_URL = `${environment.apiUrl}/api/auth`;

  constructor(private http: HttpClient) {}

  login(data: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      `${this.API_URL}/login`,
      data
    ).pipe(
      tap(res => this.saveSession(res))
    );
  }

  private saveSession(res: LoginResponse): void {
    localStorage.setItem('token', res.token);
  }
}
