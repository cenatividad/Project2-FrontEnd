import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-view-invitations',
  templateUrl: './view-invitations.component.html',
  styleUrls: ['./view-invitations.component.css']
})
export class ViewInvitationsComponent implements OnInit {
  invitations: Array<any>;
  approveDeny = true;

  constructor(private cookieService: CookieService,
              private router: Router) { }

  ngOnInit() {
  }

  processInvitation(i: number, appDen: boolean) {
    this.invitations[i];
  }

}
