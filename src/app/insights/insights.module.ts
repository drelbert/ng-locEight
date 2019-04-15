import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


import { InsightsComponent } from './insights.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatMenuModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
       {path: '', component: DashboardComponent}
    ]),
    FlexLayoutModule,
     MatGridListModule,
     MatIconModule, 
     MatCardModule, 
     MatListModule, MatMenuModule, MatButtonModule, LayoutModule
   ],
  declarations: [InsightsComponent, DashboardComponent]
})
export class InsightsModule { }



