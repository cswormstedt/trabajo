import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  animate,
  state,
  style,
  transition,
  trigger } from '@angular/animations'

import { PasswordStrengthBarModule } from 'ng2-password-strength-bar';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ApplicationComponent } from './application/application.component';

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
  }

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ApplicationComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    PasswordStrengthBarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
