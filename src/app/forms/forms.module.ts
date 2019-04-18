import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


import { LoginFormComponent } from './login-form/login-form.component';
import { FormsComponent } from './forms.component';

@NgModule({
  declarations: [LoginFormComponent, FormsComponent],
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild([
      {path: '',
      component: LoginFormComponent}
    ]),
  ]
})
export class FormsModule { }
