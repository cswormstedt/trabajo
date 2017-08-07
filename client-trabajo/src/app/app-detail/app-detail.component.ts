import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { DatePipe } from '@angular/common';
import {NgProgressService} from 'ngx-progressbar';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';


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

class Feature {
	notes: string;
}

class Status {
  want: boolean;
  follow_up: boolean;
  hear: boolean;
  passed_on: boolean;
  promising: boolean;
}


@Component({
  selector: 'app-app-detail',
  templateUrl: './app-detail.component.html',
  styleUrls: ['./app-detail.component.css']
})
export class AppDetailComponent implements OnInit{
	application: Application = new Application();
  feature: Feature = new Feature();
  today: number = Date.now();
  days: number;
  status: Status[] = [];
  private ngUnsubscribe: Subject<void> = new Subject<void>(); // = new Subject();


  constructor(private http: Http, private route: ActivatedRoute, private router: Router) {
  	

    let id = this.route.snapshot.params.id;
     this.getApplication(id);


   }

     ngOnInit() {
        

        }

   getApplication(id) {

   	this.http.get('http://localhost:9393/applications/' + id + '?token=' + window.localStorage.token).takeUntil(this.ngUnsubscribe).subscribe(response =>
    {this.application = response.json()



    var date1 = new Date(this.application["app_date"]);
    
    var date2 = new Date(this.today);
   
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());

    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    this.days = diffDays - 1; 
    
    }) 
   }

  app(){
   this.router.navigate(['/application'])
   this.ngUnsubscribe.complete();
  }

  



}
