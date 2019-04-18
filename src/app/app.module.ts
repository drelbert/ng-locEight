import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule, MatMenuModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';


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
     MatCardModule,
     MatSidenavModule,
     HttpClientModule,
     RouterModule.forRoot(routes),
     BrowserAnimationsModule,
     MatGridListModule,
     MatMenuModule,
     LayoutModule
   ],
  providers: [PersonService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule {}

