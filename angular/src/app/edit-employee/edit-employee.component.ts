import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  
  title="Edit Employee"

  employee:any;

  employeeId=0;
  message="";


  constructor(private es:EmployeeService,private route:ActivatedRoute,private router:Router) {
    console.log("#######EditEmployeeComponent created#########");

  }

 ngOnInit() {
   this.employeeId=this.route.snapshot.params.employeeId;

   if(this.employeeId)
   this.getEmployee();
  
   console.log("#######EditEmployeeComponent initialized#########");
 }

 ngOnDestroy() {
      console.log("#######EditEmployeeComponent destroyed#########");
   }


   getEmployee(){
    this.es.getEmployee(this.employeeId)
           .subscribe(response=>this.employee=response,error=>this.message=error);   
   }


   saveEmployee(){
    this.es.updateEmployee(this.employee.employeeId,this.employee)
           .subscribe(response=>{
             this.router.navigate(['/spring-boot']);
           },error=>this.message=error);   
    
    }


}
