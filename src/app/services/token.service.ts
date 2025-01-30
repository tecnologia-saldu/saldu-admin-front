import { Injectable } from '@angular/core';
import { getCookie, setCookie, removeCookie } from 'typescript-cookie';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor() { }

  saveToken(token: string, userName: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', userName);
  }

  getToken() {
    const token = localStorage.getItem('token');
    return token;
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  hasToken(): boolean {
    return !!this.getToken();
  }

  getUserName() {
    const user = localStorage.getItem('user');
    return user;
  }
}
