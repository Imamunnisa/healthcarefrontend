import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Import custom components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// Import guard (for route protection)
import { AuthGuard } from './service/auth.guard';
import { AuthService } from './service/auth.service';
import { HomeComponent } from '../patient/home/home.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
      { path: '', redirectTo: '/login', pathMatch: 'full' }
    ]),
    FormsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: []
})
export class AppModule { }
