import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invitation } from 'src/app/models/invitation';

@Injectable({
  providedIn: 'root'
})
export class InvitationService {
  Invitations: Array<Invitation>;

  constructor(private httpClient: HttpClient) { }

  addUserToProject(credentials) {
    const url = `${environment.APIbase}project/invite`;
    return this.httpClient.post(url, credentials);
  }

  viewInvitations(uID: number): Observable<any> {
    const url = `${environment.APIbase}project/viewInvitations`;
    return this.httpClient.post(url, uID);
  }

  processInvitations(credentials: any): Observable<any> {
    console.log('Credentials: ' + credentials.upid + credentials.status);
    const url = `${environment.APIbase}project/processInvitation`;
    return this.httpClient.post(url, credentials);
  }
}
