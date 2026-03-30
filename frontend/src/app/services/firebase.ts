import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA-cz95xFaEDWHgLh8--LheZEjGCsIKlyg",
  authDomain: "admin-dashboard-4c00f.firebaseapp.com",
  projectId: "admin-dashboard-4c00f",
  storageBucket: "admin-dashboard-4c00f.firebasestorage.app",
  messagingSenderId: "348894669056",
  appId: "1:348894669056:web:80f4c356a34f259ef0abe5",
  measurementId: "G-9K3CG2DF7F"
};

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth;

  constructor() {
    const app = initializeApp(firebaseConfig);
    this.auth = getAuth(app);
  }

  loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider);
  }
}