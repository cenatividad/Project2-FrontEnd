import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  projects = [];
  
  constructor(private router: Router, private cookieService: CookieService) { }


  ngOnInit() {
  }

  logout() {
    this.cookieService.deleteAll(); //safer to do field by field
    this.router.navigateByUrl('/login');
  }

  routerLink(id: number) {
    this.router.navigateByUrl(`/main/project/${id}`);
  }
}
