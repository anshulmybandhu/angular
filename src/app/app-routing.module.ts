import { ViewstudentComponent } from './students/ViewStudent/viewstudent/viewstudent.component';
import { StudentsComponent } from './students/students.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:StudentsComponent},
  {path:'students',component:StudentsComponent},
  {path:'students/:id',component:ViewstudentComponent},
  {path:'students/add',component:ViewstudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
