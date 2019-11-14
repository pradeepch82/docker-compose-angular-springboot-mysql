import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpringBootComponent } from '../spring-boot/spring-boot.component';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from '../delete-employee/delete-employee.component';

const routes: Routes = [
  {path:'spring-boot',component:SpringBootComponent},
  {path:'add',component:AddEmployeeComponent},
  {path:'edit/:employeeId',component:EditEmployeeComponent},
  {path:'delete/:employeeId',component:DeleteEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
