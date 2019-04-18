import {Route} from '@angular/router';
export const routes: Route[] = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'people',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'people/:personId',
    loadChildren: './person/person.module#PersonModule'
  },
  {
    path: 'login',
    loadChildren: './forms/forms.module#FormsModule'
  }
];