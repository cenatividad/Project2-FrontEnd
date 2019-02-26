import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginService } from './services/login.service';
import { SignupService } from './services/signup.service';
import { SessionService } from './services/sessions.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LoginService, SignupService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
