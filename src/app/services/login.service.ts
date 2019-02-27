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

  // Verifies that the passed inputs are correct in some way.
  checkInput(username: string, password: string): boolean{
    // Do Logic
    return true;
  }
}
