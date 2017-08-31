import { Component} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { ControlValueAccessor} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { NgProgressService } from 'ngx-progressbar';
import { NgbModule, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';




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
  currentValue: number;

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

  today: number = Date.now();
  currentUpdate: string;
  closeResult: string;
  currentValue = 0;

  update = [
  "Want",
  "Promising",
  "Send a follow up",
  "Waiting to hear",
  "Passed on"
  ];

  // method that runs when Class is initialized
  constructor(private http: Http, 
              private router: Router,
              public progressService: NgProgressService, 
              private modalService: NgbModal){
 
              this.getApplications();
             

              
    
}

getActiveDate(){
      for (let i = 0; i <= this.applications.length -1; i++) {

      let date1 = new Date(this.applications[i]["app_date"]);
  
      let date2 = new Date(this.today);
    
      let timeDiff = Math.abs(date2.getTime() - date1.getTime());

      let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

      this.applications[i]["active"] = diffDays - 1;
      }
     }
 
  getApplications(){
    this.progressService.start();
    this.http.get('http://localhost:9393/applications?token=' + window.localStorage.token).subscribe(response => {
      this.applications = response.json();
      this.getActiveDate();
      this.progressService.done()
      
    }
    
      
    , err => {
      //if permission denied
      if(err.status === 403){
        this.router.navigate(['/login'])
      }else{
        alert("ERROR");
      }
    })
  }

  postApplication(){
   
   
    this.http.post('http://localhost:9393/applications?token=' + window.localStorage.token, this.newApplication).subscribe(response =>{
      this.applications = response.json()
      this.getActiveDate();


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
    // this.showPatchForm = true;
    this.http.patch('http://localhost:9393/applications/' + this.updateApplication.id + '?token=' + window.localStorage.token, this.updateApplication).subscribe(response => {
      this.applications = response.json();
      this.getActiveDate();
   

    })
  }

  AddApplication(form, application) {
    this.modalService.open(form).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  deleteApplication(application){
    this.http.delete('http://localhost:9393/applications/' + application.id + '?token=' + window.localStorage.token ).subscribe(response =>
      this.applications = response.json();
      this.getActiveDate();

    )
  }

open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


editApplication(app, application){
    // this.showPatchForm = !this.showPatchForm;

    this.updateApplication = Object.assign({},application);

    this.modalService.open(app).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
 
  }

  logout(){
    window.localStorage.clear();
    this.router.navigate(['/'])
  }
}