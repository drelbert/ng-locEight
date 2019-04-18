import { Injectable } from '@angular/core';
//This HttpClient provides a simplified client HTTP API.
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

//The type Person is being id as interface not a class because JavaScript does not support classes.  
//Def types as TS interfaces not classes to reduce runnable code size.  
export interface Person {
  id: number;
  role: string;
  name: string;
  team: string;
  email: string;
  ninjaRating: number;
  skills: string[];
  about: string;
  imageUrl: string;
}



//The methods of PersonService class being getAll() and getById().
@Injectable()
export class PersonService {
  //Constructor method setting up the local named http of HttpClient.
  constructor(private http: HttpClient) {}

  getAll(): Observable<Person[]> {
     return this.http.get<Person[]>('/data/people.json');
  }

  getById(personId: number): Observable<Person> {
     return this.http.get<Person[]>('/data/people.json')
  .pipe(
    map(people => <Person>people.find(p => p.id === personId))
   );
  }
}
