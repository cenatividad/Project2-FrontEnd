import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ViewInvitationsService } from 'src/app/services/view-invitations.service';

@Component({
  selector: 'app-view-invitations',
  templateUrl: './view-invitations.component.html',
  styleUrls: ['./view-invitations.component.css']
})
export class ViewInvitationsComponent implements OnInit {
  invitations: Array<any>;
  approveDeny = true;

  constructor(private cookieService: CookieService,
              private router: Router,
              private viewInvitationsService: ViewInvitationsService) { }

  ngOnInit() {
  }

  processInvitation(i: number, appDen: boolean) {
    this.invitations[i];
  }

}
