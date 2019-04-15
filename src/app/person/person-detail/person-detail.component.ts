import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/app/shared/services/people.service';

@Component({
  selector: 'loc-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent {
  @Input() person: Person;


}
