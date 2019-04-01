import {Route} from '@angular/router';
export const routes: Route[] = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'insights',
    loadChildren: './insights/insights.module#InsightsModule'
  }
];