import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';
import { InsightsComponent } from './insights.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
       {path: '', component: InsightsComponent}
    ]),
    FlexLayoutModule,
     MatGridListModule
   ],
  declarations: [InsightsComponent]
})
export class InsightsModule { }



