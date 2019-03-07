import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { SignupService } from 'src/app/services/signup.service';

/**
 * Component for signing up as a new user
 */
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username: string;
  password: string;
  passwordVerification: string;
  email: string;
  firstName: string;
  lastName: string;

  signupStatus: string;

  constructor(private signupService: SignupService) { }

  ngOnInit() {
  }

  /**
   * Calls the service to register new user with provided credentials
   */
  signup() {
    const user: User = new User();
    user.username = this.username;
    user.password = this.password;
    user.email = this.email;
    user.firstName = this.firstName;
    user.lastName = this.lastName;

    this.signupService.signup(user).subscribe((payload) => {
      console.log('Signup Component: user created');
      this.signupStatus = 'success';
    }, (error) => {
      console.log("Signup component: user failed to be created");
      this.signupStatus = 'failure';
    });
  }

  /**
   * Checks that the fields are filled in properly, used to disable the submit button until they are.
   */
  checkInputs() {
    return this.signupService.checkInput(this.username, this.password, this.passwordVerification, this.email,
      this.firstName, this.lastName);
  }
}
