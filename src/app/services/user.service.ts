import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { environment } from '../../environments/environment';

/**
 * Service to handle business logic related to users
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {
  /**
   * Returns the URI to be used in requests to requests projects related to a user
   */
  private getUserProjectsURI(id: number): string {
    return `${environment.APIbase}/users/${id}/projects`;
  }

  constructor(private httpClient: HttpClient) { }

  /**
   * Sends a get request to the server to retrieve a list of projects related to the specified user. Returns
   * an observable of the request.
   */
  getUserProjects(id: number): Observable<Array<Project>> {
    const obs = this.httpClient.get<Array<Project>>(this.getUserProjectsURI(id));
    return obs;
  }
}
