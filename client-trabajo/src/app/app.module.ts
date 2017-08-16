import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { PasswordStrengthBarModule } from 'ng2-password-strength-bar';
import { ToggleButtonModule} from 'primeng/primeng';
import { NgProgressModule } from 'ngx-progressbar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';





import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ApplicationComponent } from './application/application.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
  	path: 'register',
  	component: RegisterComponent
  },
  {
  	path: 'application',
  	component: ApplicationComponent
  },

  {
    path: '',
    component: HomeComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ApplicationComponent,
    HomeComponent,

  ],

  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    PasswordStrengthBarModule,
    ToggleButtonModule,
    NgProgressModule,
    NgbModule.forRoot()


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
