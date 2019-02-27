import { Component, OnInit } from '@angular/core';

// This is a wrapper component for both the login and signup componets
@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.component.html',
  styleUrls: ['./signup-login.component.css']
})
export class SignupLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
