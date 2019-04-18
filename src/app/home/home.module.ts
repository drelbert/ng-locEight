import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

import {HomeComponent} from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';





@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
       {path: 'people', component: HomeComponent},
       {path: '', component: DashboardComponent}
    ]),
    FlexLayoutModule,
     MatGridListModule,
     MatIconModule, 
     MatCardModule, 
     MatMenuModule, 
     MatButtonModule, 
     LayoutModule,
     
     
   ],
  declarations: [HomeComponent, DashboardComponent]
})
export class HomeModule {}

