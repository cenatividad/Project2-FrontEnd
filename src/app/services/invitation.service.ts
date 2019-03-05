import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvitationService {

  constructor(private httpClient: HttpClient) { }

  addUserToProject(credentials) {
    const url = `${environment.APIbase}project/invite`;
    return this.httpClient.post(url, credentials);
  }

  viewInvitations(credentials: any): Observable<any> {
    const url = `${environment.APIbase}/viewinvitations`;
    return this.httpClient.post(url, credentials);
  }
}
