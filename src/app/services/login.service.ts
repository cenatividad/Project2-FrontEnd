import { Injectable } from '@angular/core';
import { SessionService } from './sessions.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private sessionService: SessionService) { }


  // Performs the login service. Requests the server for authentication and proceeds with logic based on success
  // or failure.
  doLogin(username: string, password: string){
    // We do the checking stuff here
    console.log(username + " " + password);

    // placeholder
    const user: User = new User();

    this.sessionService.setActiveUser(user);

    //routing
    if(this.sessionService.getActiveUser()){
      console.log("login service, login success");
      // LOGIN SUCCESS: do stuff
    } else {
      console.log("login service, login fail");
      // LOGIN FAILURE: do stuff
    }
  }

  // Checks username for not being null/undefined or empty
  usernameOK(username: string): boolean{
    if(username && username !== ''){
      return true;
    } else{
      return false;
    }
  }

  // Checks password for not being null/undefined or empty
  passwordOK(password: string): boolean{
    if(password && password !== ''){
      return true;
    } else{
      return false;
    }
  }

  // Verifies that the passed inputs are correct in some way.
  checkInput(username: string, password: string): boolean{
    return(this.usernameOK(username) && this.passwordOK(password));
  }
}
