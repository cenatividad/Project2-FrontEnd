import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SessionService } from 'src/app/services/sessions.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  projects = [];
  
  constructor(private router: Router, private cookieService: CookieService, 
              private sessionService: SessionService) { }


  ngOnInit() {
  }

  logout() {
    this.sessionService.logout();
  }

  routerLink(id: number) {
    this.router.navigateByUrl(`/main/project/${id}`);
  }
}
