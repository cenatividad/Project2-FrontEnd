import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient: HttpClient) { }

  createProject(project: Project): Observable<any> {
    const url = `${environment.apiUrl}/project/create`;
    return this.httpClient.post(url, project);
  }

  viewProject(id: number): Observable<any> {
    const url = `${environment.apiUrl}/project/viewProject`;
    return this.httpClient.post(url, id);
  }

  viewAllProjects() {

  }
}
