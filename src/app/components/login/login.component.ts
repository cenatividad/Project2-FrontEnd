import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { SessionService } from 'src/app/services/sessions.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  loginFailed = false;

  constructor(private loginService: LoginService, private sessionService: SessionService,
              private navigationService: NavigationService) { }

  ngOnInit() {
  }

  /**
   * Calls the login service to validate user
   */
  login() {
    this.loginService.doLogin(this.username, this.password).subscribe((payload) => {
      this.sessionService.setActiveUser(payload);
      this.navigationService.navToUserProjects();
    }, (error) => {
      console.log('LoginComponent: Login failed');
      this.loginFailed = true;
    });
  }

  /**
   * Checks that the input is valid, form will disable login button if they are not
   */
  checkInput(): boolean {
    return this.loginService.checkInput(this.username, this.password);
  }
}
