import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }

  signUp() {
    return true;
  }

  logOut() {
    localStorage.setItem("com.edugeeks.user.loggedIn", "false");
  }

  isUserAuthenticated() {
    let result = localStorage.getItem("com.edugeeks.user.loggedIn");
    if (!result || result == "false") {
      return false;
    }
    else {
      return true;
    }
  }

  login() {
    localStorage.setItem("com.edugeeks.user.loggedIn", "true");
  }

  getUserProfile() {
    return this.http.get("http://localhost:8000/profile");
  }

}
