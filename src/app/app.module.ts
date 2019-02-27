import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginService } from './services/login.service';
import { SignupService } from './services/signup.service';
import { SessionService } from './services/sessions.service';
import { FormsModule } from '@angular/forms';
import { SignupLoginComponent } from './components/signup-login/signup-login.component';
import { UserProjectsComponent } from './components/user-projects/user-projects.component';
import { NewProjectComponent } from './components/new-project/new-project.component';
import { ViewInvitationsComponent } from './components/view-invitations/view-invitations.component';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    SignupComponent,
    SignupLoginComponent,
    UserProjectsComponent,
    NewProjectComponent,
    ViewInvitationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [LoginService, SignupService, SessionService, CookieService, Router],
  bootstrap: [AppComponent]
})
export class AppModule { }
