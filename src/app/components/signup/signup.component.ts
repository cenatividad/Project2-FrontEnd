import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { SignupService } from 'src/app/services/signup.service';

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

    this.signupService.signup(user);

  }

  // Checks that the inputs are in valid formats, submit button will be disabled if they're not.
  checkInputs() {
    return this.signupService.checkInput(this.username, this.password, this.passwordVerification, this.email,
      this.firstName, this.lastName);
  }
}
