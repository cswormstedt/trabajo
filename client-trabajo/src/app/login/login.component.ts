import { Component } from '@angular/core';
import {Http, Response } from '@angular/http'
import { Router } from '@angular/router'



@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  user = {};
  message: string = "username or password is incorrect";

 

  constructor(private http: Http, private router: Router){

  }

  login(){

    this.http.post('http://localhost:9393/users/login', this.user).subscribe(response => {
      window.localStorage.setItem("token",response.json().token)
      this.router.navigate(['/application'])
    },err => {
      //if permission denied
      if(err.status === 403){
        this.router.navigate(['/login'])
      }
    })
  }

  register(){
    this.router.navigate(['/register'])
  }

  home(){
    this.router.navigate(['/'])
  }


}
