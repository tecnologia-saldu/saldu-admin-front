import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { TokenService } from './token.service';
import { ResponseLogin } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL = 'http://localhost:3000/auth/signIn'
  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  login(email: string, password: string) {
    return this.http.post<ResponseLogin>(`${this.API_URL}`, {
      email,
      password
    })
    .pipe(
      tap(response => {
        this.tokenService.saveToken(response.token);
      })
    )
  }

  logout() {
    this.tokenService.removeToken();
  }
}
