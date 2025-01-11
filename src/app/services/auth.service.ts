import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { TokenService } from './token.service';
import { ResponseLogin } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://ec2-3-144-209-131.us-east-2.compute.amazonaws.com:3001/auth/signIn'
  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  login(email: string, password: string) {
    return this.http.post<ResponseLogin>(`${this.apiUrl}`, {
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
