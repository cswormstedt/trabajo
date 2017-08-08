import { Component} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Router } from '@angular/router';
import { ControlValueAccessor} from '@angular/forms';
import { DatePipe } from '@angular/common';
import {NgProgressService} from 'ngx-progressbar';



class Application{
  id: number;
  app_date: string;
  job_title: string;
  job_description: string;
  contact_name: string;
  contact_email: string;
  company_name: string;
  user_id: number;
  active: number;
}


@Component({
  selector: 'app-root',
  templateUrl: './Application.component.html',
  styleUrls: ['./Application.component.css']
  
})

export class ApplicationComponent {
  applications: Application[] = [];
  newApplication: Application = new Application();
  updateApplication: Application = new Application();
  showPostForm: boolean = false;
  showPatchForm: boolean = false;
  today: number = Date.now();

  // method that runs when Class is initialized
  constructor(private http: Http, private router: Router, public progressService: NgProgressService){
 
    this.getApplications();

  }
  
  getApplications(){
    this.progressService.start();
    this.http.get('http://localhost:9393/applications?token=' + window.localStorage.token).subscribe(response => {
      this.applications = response.json()

    for (var i = 0; i <= this.applications.length -1; i++) {
  
   
        var date1 = new Date(this.applications[i]["app_date"]);
        console.log(date1)
    
        var date2 = new Date(this.today);
        console.log(date2)


        var timeDiff = Math.abs(date2.getTime() - date1.getTime());

        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

        this.applications[i]["active"]= diffDays - 1;
        console.log(this.applications[i]["active"])

    }
    this.progressService.done()
      
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
    this.showPatchForm = !this.showPatchForm;
    this.updateApplication = Object.assign({},application);
  }


  logout(){
    window.localStorage.clear();
    this.router.navigate(['/'])
  }
}