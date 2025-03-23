import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to Angular 18</h1>
    <nav>
      <a routerLink="/login">Login</a> |
      <a routerLink="/dashboard">Dashboard</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
}
