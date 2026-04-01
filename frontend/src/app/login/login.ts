import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseService } from '../services/firebase';
import { ApiService } from '../services/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  constructor(
    private firebase: FirebaseService,
    private api: ApiService
  ) {}

  login() {
    this.firebase.loginWithGoogle()
      .then(result => {
        const user = result.user;

        const userData = {
          name: user.displayName,
          email: user.email
        };

        this.api.googleLogin(userData).subscribe((res: any) => {
          console.log("Saved in DB:", res);

          // 🔥 Save user
          localStorage.setItem('user', JSON.stringify(res));

          // 🔥 FORCE UI UPDATE (FIX)
          window.location.reload();
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
}