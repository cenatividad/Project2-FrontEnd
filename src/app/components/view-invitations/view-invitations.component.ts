import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Invitation } from 'src/app/models/invitation';
import { InvitationService } from 'src/app/services/invitation.service';

@Component({
  selector: 'app-view-invitations',
  templateUrl: './view-invitations.component.html',
  styleUrls: ['./view-invitations.component.css']
})
export class ViewInvitationsComponent implements OnInit {
  invitations: Array<Invitation>;
  inv: Invitation;
  approveDeny = true;

  constructor(private cookieService: CookieService,
              private router: Router,
              private invitationService: InvitationService) { }

  ngOnInit() {
    this.getInvitations();
  }

  getInvitations() {
    const credentials = {
      uid: this.inv.userID
    };
    this.invitationService.viewInvitations(credentials).subscribe( (payload) => {
      for (const key in payload) {
        if (payload.hasOwnProperty(key)) {
          this.invitations = payload;
        }
      }
    }, (err) => console.log(Error));
  }

  processInvitation(i: number, appDen: boolean) {
    this.inv = this.invitations[i];
  }

}
