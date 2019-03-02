import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvitationService {

  constructor(private httpClient: HttpClient) { }

  addUserToProject(credentials) {
  const url = `${environment.APIbase}project/invite`;
  return this.httpClient.post(url, credentials);
  }
}
