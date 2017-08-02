import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, Response } from '@angular/http';


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
	heart: boolean;
	notes: string;
}


@Component({
  selector: 'app-app-detail',
  templateUrl: './app-detail.component.html',
  styleUrls: ['./app-detail.component.css']
})
export class AppDetailComponent implements OnInit{
	application: Application = new Application();
	feature: Feature = new Feature();
	heart: boolean = false


  constructor(private http: Http, private route: ActivatedRoute, private router: Router) {
  	let id = this.route.snapshot.params.id;

    this.getApplication(id)
   }

     ngOnInit() {
  }

   getApplication(id) {
   	this.http.get('http://localhost:9393/applications/' + id + '?token=' + window.localStorage.token).subscribe(response =>
   	 this.application = response.json())
   }

    app(){
   this.router.navigate(['/application'])
 }

   hearted(){
   	this.heart = false
   }

  

}
