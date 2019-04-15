import { Component, OnInit, Input } from '@angular/core';
import { map, startWith } from 'rxjs/operators';
import { MediaObserver } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { Person } from 'src/app/shared/services/people.service';

@Component({
  selector: 'loc-person-suggestion',
  templateUrl: './person-suggestion.component.html',
  styleUrls: ['./person-suggestion.component.scss']
})

export class PersonSuggestionComponent {
  @Input() people: Person[];
  readonly columns$: Observable<number>;
  readonly breakpointsToColumnsNumber = new Map([
      [ 'xs', 2],
      [ 'sm', 3],
      [ 'md', 5],
      [ 'lg', 2],
      [ 'xl', 3], 
  ]);

constructor(private media: MediaObserver) {
    this.columns$ = this.media.media$
    .pipe(
        map(mc => <number>this.breakpointsToColumnsNumber.get(mc.mqAlias)),
        startWith(3) 
    );
}

}