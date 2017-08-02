import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';

import { PasswordStrengthBarModule } from 'ng2-password-strength-bar';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ApplicationComponent } from './application/application.component';
import { AppDetailComponent } from './app-detail/app-detail.component';
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
    path: 'applications/:id',
    component: AppDetailComponent
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
    AppDetailComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
   
    PasswordStrengthBarModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
