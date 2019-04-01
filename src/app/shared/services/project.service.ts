import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export interface Project{
  title : string;
  projectId : number;
  lead : string;
  dueDate : Date;
  completedLastWeek : string;
  doingNextWeek : string;
  issues : string;
  lastUpdatedBy : string;
  imageUrl : string;
}

@Injectable()
export class ProjectService {
  constructor(private http: HttpClient) {}
  //The method with argument of type Project as declared by interface above.
  getAll(): Observable<Project[]> {
    return this.http.get<Project[]>('/data/projects.json');
  }

  getById(projectId: number): Observable<Project> {
    return this.http.get<Project[]>('/data/projects.json')
  .pipe(
    map(projects => <Project>projects.find(p => p.projectId === projectId))
  );
  }
}
