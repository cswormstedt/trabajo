import { Component} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Router } from '@angular/router';
import { ControlValueAccessor} from '@angular/forms';


class Application{
  id: number;
  app_date: string;
  job_title: string;
  job_description: string;
  contact_name: string;
  contact_email: string;
  company_name: string;
  user_id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './Application.component.html',
  styleUrls: ['./Application.component.css'],
  
})

export class ApplicationComponent {
  applications: Application[] = [];
  newApplication: Application = new Application();
  updateApplication: Application = new Application();
  showPostForm: boolean = false;
  showPatchForm: boolean = false;
  stars: boolean[] = Array(5).fill(false);
  

  // method that runs when Class is initialized
  constructor(private http: Http, private router: Router){
    this.getApplications();

  }

  getApplications(){
    this.http.get('http://localhost:9393/applications?token=' + window.localStorage.token).subscribe(response => {
      this.applications = response.json();
    }, err => {
      //if permission denied
      if(err.status === 403){
        this.router.navigate(['/login'])
      }else{
        alert("ERROR");
      }
    })
  }

  postApplication(){
    this.showPostForm = false
    this.http.post('http://localhost:9393/applications?token=' + window.localStorage.token, this.newApplication).subscribe(response =>{
      this.applications = response.json()
    }, err =>{
      //if permission denied
      if(err.status === 403){
        this.router.navigate(['/login'])
      }else{
        alert("ERROR");
      }
    })
  }

  get value(): number {
    return this.stars.reduce((total, starred) => {
      return total + (starred ? 1 : 0);
    }, 0);
  }

  rate(rating: number) {
    this.stars = this.stars.map((_, i) => rating > i);
  }

  patchApplication(){
    this.showPatchForm = false
    this.http.patch('http://localhost:9393/applications/' + this.updateApplication.id + '?token=' + window.localStorage.token, this.updateApplication).subscribe(response =>
      this.applications = response.json()
    )
  }

  deleteApplication(application){
    this.http.delete('http://localhost:9393/applications/' + application.id + '?token=' + window.localStorage.token ).subscribe(response =>
      this.applications = response.json()
    )
  }

  editApplication(application){
    this.showPatchForm = true;
    this.updateApplication = Object.assign({},application);
  }

  goToApplication(application){
    this.router.navigate(['/applications/', application.id])
  }

  logout(){
    window.localStorage.clear();
    this.router.navigate(['/login'])
  }
}