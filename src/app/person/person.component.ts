import { filter, map, switchMap} from 'rxjs/operators';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Person, PersonService } from '../shared/services/people.service';

@Component({
  selector: 'loc-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent{
  person$: Observable<Person>;
  suggestedPeople$: Observable<Person[]>;


  constructor(
    private route: ActivatedRoute,
    private personService: PersonService 
  ) { 
    this.person$ = this.route.paramMap
    .pipe(
      map(params => parseInt(params.get('personId') || '', 10)),
      filter(personId => !!personId),
      switchMap(personId => this.personService.getById(personId))
    );

   this.suggestedPeople$ = this.personService.getAll();
 }
};

