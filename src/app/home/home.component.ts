import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {Component} from '@angular/core';
import {MediaObserver} from '@angular/flex-layout';
import {Person, PersonService} from '../shared/services/people.service';

@Component({
  selector: 'loc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  readonly columns$: Observable<number>;
  readonly people$: Observable<Person[]>;

  readonly breakpointsToColumnsNumber = new Map([
    [ 'xs', 1 ],
    [ 'sm', 2 ],
    [ 'md', 3 ],
    [ 'lg', 4 ],
    [ 'xl', 5 ],
  ]);

  constructor(private media: MediaObserver,
              private personService: PersonService) {
                //Method getAll() initializes the people$ variable of type Observable.
    this.people$ = this.personService.getAll();

    this.columns$ = this.media.media$
       .pipe(
        map(mc => <number>this.breakpointsToColumnsNumber.get(mc.mqAlias))
       );
  }
}
