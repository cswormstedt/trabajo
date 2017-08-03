import { Component } from '@angular/core';
import {Http, Response } from '@angular/http'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  user = {};

  constructor(private http: Http, private router: Router){

  }

  register(){
    this.http.post('http://localhost:9393/users/register', this.user).subscribe(response => {
      window.localStorage.setItem("token",response.json().token)
      this.router.navigate(['/application'])
    })
  }

  login(){
    this.router.navigate(['/login'])
  }

  home(){
    this.router.navigate(['/'])
  }
}
