import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string | undefined;
  password: string | undefined;

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    const loginData = { username: this.username, password: this.password };
    
    this.http.post<any>('http://localhost:8080/login', loginData)
      .subscribe({
        next: (response) => {
          localStorage.setItem('token', response);
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          alert('Login failed!');
        }
      });
  }
}
