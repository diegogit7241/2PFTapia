import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoursesComponent } from "./courses/courses/courses.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UserComponent } from "./students/user-component/user-component";


const routes: Routes = [
 { 
   path: 'dashboard',
  component: DashboardComponent,
  children:[
    {
      path: 'home',
      component: UserComponent,
    },
    {
      path: 'students',
      component: UserComponent,
    },
    {
      path: 'courses',
      component: CoursesComponent,
    },
    {
      path: 'enroll',
      component: CoursesComponent,
    },
    {
      path: '**',
      redirectTo: 'home',
    }
  ],
  
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
