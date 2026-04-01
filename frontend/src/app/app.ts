import { Component } from '@angular/core';
import { RouterOutlet, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    CommonModule,
    LoginComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  isLoggedIn = false;
  user: any = null;

  constructor(private router: Router) {
    this.loadUser();
  }

  // 🔥 Load user from localStorage
  loadUser() {
    const data = localStorage.getItem('user');

    if (data) {
      this.user = JSON.parse(data);
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }

  getUserName() {
    return this.user?.name || 'Admin';
  }
}