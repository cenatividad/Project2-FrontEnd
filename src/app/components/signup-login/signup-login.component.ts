import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/sessions.service';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

// This is a wrapper component for both the login and signup componets
@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.component.html',
  styleUrls: ['./signup-login.component.css']
})
export class SignupLoginComponent implements OnInit {

  constructor(private sessionService: SessionService, private navigationService: NavigationService) { }

  ngOnInit() {
    if (this.sessionService.getActiveUser()){
      this.navigationService.navToMain();
    }
  }
}
