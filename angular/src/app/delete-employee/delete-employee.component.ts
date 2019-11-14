import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  
  employeeId=0;
  message="";


  constructor(private es:EmployeeService,private route:ActivatedRoute,private router:Router) {
    console.log("#######EditEmployeeComponent created#########");

  }

 ngOnInit() {
   this.employeeId=this.route.snapshot.params.employeeId;

   if(this.employeeId)
   this.deleteEmployee();
  
   console.log("#######EditEmployeeComponent initialized#########");
 }

 ngOnDestroy() {
      console.log("#######EditEmployeeComponent destroyed#########");
   }

 deleteEmployee(){
    this.es.deleteEmployee(this.employeeId)
           .subscribe(response=>{
            this.router.navigate(['/spring-boot']);
           },error=>this.message=error);   
   }

}
