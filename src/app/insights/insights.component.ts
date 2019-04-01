import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {Component} from '@angular/core';
import {MediaObserver} from '@angular/flex-layout';
import {Project, ProjectService} from '../shared/services/project.service';

@Component({
  selector: 'loc-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent {
  readonly columns$: Observable<number>;
  readonly project$: Observable<Project[]>;

  readonly breakpointsToColumnsNumber = new Map([
    [ 'xs', 1 ],
    [ 'sm', 2 ],
    [ 'md', 3 ],
    [ 'lg', 4 ],
    [ 'xl', 5 ],
  ]);

  constructor(private media: MediaObserver,
              private projectService: ProjectService) {
                //Method getAll() initializes the project$ variable of type Observable.
    this.project$ = this.projectService.getAll();

    this.columns$ = this.media.media$
       .pipe(
        map(mc => <number>this.breakpointsToColumnsNumber.get(mc.mqAlias))
       );
  }
}