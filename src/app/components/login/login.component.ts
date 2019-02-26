import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login(){
    this.loginService.doLogin(this.username, this.password);
  }

  checkInput(): boolean{
    return this.loginService.checkInput(this.username, this.password);
  }
}
