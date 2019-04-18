import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';



import { PersonComponent } from './person.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonSuggestionComponent } from './person-suggestion/person-suggestion.component';



@NgModule({

  imports: [
    CommonModule,
    FlexLayoutModule, 
    RouterModule.forChild([
      {path: '', 
      component: PersonComponent}
    ]),
    MatGridListModule,
    MatCardModule, 
    MatListModule
  ],

  declarations: [
    PersonComponent, 
    PersonDetailComponent, 
    PersonSuggestionComponent]
})
export class PersonModule { }
