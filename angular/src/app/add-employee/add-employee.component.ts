import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  title="Add Employee";

  employee:any;
   
  message="";

  constructor(private es:EmployeeService,private router:Router) {
    console.log("#######AddEmployeeComponent created#########");

   }

  ngOnInit() {
    this.employee={
      "employeeId": 0,
      "fname": "",
      "lname": "",
      "salary": 0.0,
      "email": "",
      "doj":new Date(),
      "mobile":"",
      "pan": ""
  },

  console.log("#######AddEmployeeComponent initialized#########");
  }

  ngOnDestroy() {
       console.log("#######AddEmployeeComponent destroyed#########");
   }


   addEmployee(){
    this.es.addEmployee(this.employee)
           .subscribe(response=>{
             this.router.navigate(['/spring-boot']);
           },error=>this.message=error);   
    
    }
}

