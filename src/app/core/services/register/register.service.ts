import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { RegisterRequest } from '../../models/register-request';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
   private http = inject(HttpClient);
  private readonly API_URL = `${environment.apiUrl}/api/auth/register`;

  register(payload: RegisterRequest): Observable<void> {
    return this.http.post<void>(
      `${this.API_URL}`,
      payload
    );
  }
}
