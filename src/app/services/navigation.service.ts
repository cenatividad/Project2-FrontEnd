import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

  navToMain(){
    this.router.navigateByUrl('/main');
  }

  navToLogin(){
    this.router.navigateByUrl('');
  }
}
