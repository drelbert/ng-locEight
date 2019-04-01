import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';

import { PersonService } from './shared/services/people.service';
import { ProjectService } from './shared/services/project.service';
import {routes} from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
     MatIconModule,
     MatToolbarModule,
     FlexLayoutModule,
     HttpClientModule,
     RouterModule.forRoot(routes)
   ],
  providers: [PersonService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule {}

