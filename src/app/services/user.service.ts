import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private getUserProjectsURI(id: number): string {
    return `${environment.APIbase}/users/${id}/projects`;
  }

  constructor(private httpClient: HttpClient) { }

  getUserProjects(id: number): Observable<Array<Project>> {
    const obs = this.httpClient.get<Array<Project>>(this.getUserProjectsURI(id));
    return obs;
  }
}
