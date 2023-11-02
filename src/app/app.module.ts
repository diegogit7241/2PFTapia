import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CoursesTableComponent } from './courses/courses-table/courses-table.component';
import { CoursesDialogComponent } from './courses/courses-dialog/courses-dialog.component';
import { CoursesComponent } from './courses/courses/courses.component';



@NgModule({
  declarations: [
    AppComponent,
       
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DashboardModule,
    SharedModule
  ],
  providers: [{
    provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
