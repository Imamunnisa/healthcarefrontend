import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;
  private loggedInSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {
    this.token = localStorage.getItem('token');
    this.loggedInSubject.next(!!this.token);
  }

  login(username: string, password: string) {
    const loginData = { username, password };
    return this.http.post<any>('http://localhost:8080/login', loginData);
  }

  isAuthenticated() {
    return this.loggedInSubject.asObservable();
  }

  logout() {
    localStorage.removeItem('token');
    this.loggedInSubject.next(false);
    this.router.navigate(['/login']);
  }
}
