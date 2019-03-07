import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invitation } from 'src/app/models/invitation';

/**
 * Service to handle invitation business logic and hold an array of invitations related to the current logged in
 * user.
 */
@Injectable({
  providedIn: 'root'
})
export class InvitationService {
  Invitations: Array<Invitation>;

  constructor(private httpClient: HttpClient) { }

  /**
   * Sends a post request to invite a user to a project, returns an observable of the request.
   */
  addUserToProject(credentials) {
    const url = `${environment.APIbase}project/invite`;
    return this.httpClient.post(url, credentials);
  }

  /**
   * Sends a post request to get invitations related to a specific user, returns an observable of the request
   */
  viewInvitations(uID: number): Observable<any> {
    const url = `${environment.APIbase}project/viewInvitations`;
    return this.httpClient.post(url, uID);
  }

  /**
   * Sends a post request to process the passed invitations as indicated, returns an observable of the request.
   */
  processInvitations(credentials: any): Observable<any> {
    console.log('Credentials: ' + credentials.upid + credentials.status);
    const url = `${environment.APIbase}project/processInvitation`;
    return this.httpClient.post(url, credentials);
  }
}
