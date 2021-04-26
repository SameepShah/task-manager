import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';
import { environment } from '../../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private url = environment.projectsUrl;
  constructor(private httpClient: HttpClient) {

   }

   getAllProjects(): Observable<Project[]>
   {
      return this.httpClient.get<Project[]>(this.url + "/api/projects");
   }
}
