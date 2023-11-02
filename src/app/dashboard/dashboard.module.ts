
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FullNamePipe } from '../shared/pipes/full-name.pipe';
import { UserTAbleComponent } from '../user-table/user-table.component';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { UserComponent } from '../user-component/user-component';
import { ThFontsDirective } from '../th-fonts.directive';
import { HomeComponent } from '../home/home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CoursesDialogComponent } from '../courses/courses-dialog/courses-dialog.component';
import { CoursesComponent } from '../courses/courses/courses.component';
import { CoursesTableComponent } from '../courses/courses-table/courses-table.component';

@NgModule({
  declarations: [
    DashboardComponent, 
    FullNamePipe,   
    ThFontsDirective,
    HomeComponent,
    UserComponent,
    UserTAbleComponent,
    UserDialogComponent,
    CoursesTableComponent,
    CoursesDialogComponent,
    CoursesComponent 
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
    
  ],
  exports: 
  [DashboardComponent,
  FullNamePipe,
  UserTAbleComponent,
  UserDialogComponent,
  UserComponent,
  ThFontsDirective,
  HomeComponent,
  AppRoutingModule,
  CoursesComponent,
  CoursesTableComponent,
  CoursesDialogComponent]
})
export class DashboardModule { }
