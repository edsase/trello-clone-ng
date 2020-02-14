import { RefreshService } from './refresh.service';
import { StorageService } from './storage.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import { TextCardComponent } from './text-card/text-card.component';
import { BoardComponent } from './board/board.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';


import { ProjectComponent } from './project/project.component';
import { ActivitiesComponent } from './activities/activities.component';
import { HomeComponent } from './home/home.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { RefreshDummyComponent } from './refresh-dummy/refresh-dummy.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: "projects/:projectName", component: ActivitiesComponent },
  { path: "refresh", component: RefreshDummyComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    TextCardComponent,
    BoardComponent,
    ProjectComponent,
    ActivitiesComponent,
    HomeComponent,
    ActivityListComponent,
    RefreshDummyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'})
  ],
  providers: [StorageService, RefreshService],
  bootstrap: [AppComponent]
})
export class AppModule { }
