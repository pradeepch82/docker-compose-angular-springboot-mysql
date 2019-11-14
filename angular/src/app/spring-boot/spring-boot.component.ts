import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-spring-boot',
  templateUrl: './spring-boot.component.html',
  styleUrls: ['./spring-boot.component.css']
})
export class SpringBootComponent implements OnInit {

  title="Angular 8 -Spring Boot -MySQL Integration using Docker Compse"

  employees:any;

  message="";


  constructor(private es:EmployeeService) {
    console.log("#######SpringBootComponent created#########");

  }

 ngOnInit() {
   this.getAllEmployees();
  console.log("#######SpringBootComponent initialized#########");
 }

 ngOnDestroy() {
      console.log("#######SpringBootComponent destroyed#########");
   }



   getAllEmployees(){
    this.es.getAllemployees()
           .subscribe(response=>this.employees=response,error=>this.message=error);   
   }




}
