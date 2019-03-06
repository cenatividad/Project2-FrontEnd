import { Invitation } from './../../models/invitation';
import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { InvitationService } from 'src/app/services/invitation.service';
import { SessionService } from 'src/app/services/sessions.service';

/**
 * Component displaying the list of invitations to project where users can manage them.
 */
@Component({
  selector: 'app-view-invitations',
  templateUrl: './view-invitations.component.html',
  styleUrls: ['./view-invitations.component.css']
})
export class ViewInvitationsComponent implements OnInit {
  invitations: Array<Invitation>;
  inv: any;
  invStatus: string;
  approveDeny = true;
  user = this.sessionService.getActiveUser();

  uid: number;
  pid: number;
  status: string;

  constructor(private cookieService: CookieService,
              private sessionService: SessionService,
              private router: Router,
              private invitationService: InvitationService) { }

  ngOnInit() {
    this.getInvitations();
  }

  /**
   * Calls the invitation service to request the server for the list of invitatios related to the current
   * user.
   */
  getInvitations() {
    const uID = this.user.id;

    this.invitationService.viewInvitations(uID).subscribe( (payload) => {
      this.invitations = payload || [];
    }, (err) => console.log(err));
  }

  /**
   * Has the invitation service to request the server to process the invitation with the user decision.
   * On success, updates the list of invitations to remove the processed one.
   */
  processInvitation(i: number, appDen: boolean) {
    if (appDen) {
      this.invStatus = 'ACCEPTED';
    } else {
      this.invStatus = 'DECLINED';
    }

    const credentials = {
      upid: this.invitations[i].uPID,
      status: this.invStatus
    };

    this.invitationService.processInvitations(credentials).subscribe( (payload) => {
      this.getInvitations();
    }, (err) => console.log(Error));
  }

}
