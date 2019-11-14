import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

private baseURL="http://spring-boot-ems:8080/employees";
  
  

  constructor(private http:HttpClient) {
     console.log("EmployeeService created...");   
   }


   getAllemployees() :Observable<any>{
     return this.http.get(this.baseURL);
   }

   getEmployee(employeeId:number) :Observable<any>{
    return this.http.get(this.baseURL+"/"+employeeId);
   }

   deleteEmployee(employeeId:number) :Observable<any>{
     return this.http.delete(this.baseURL+"/"+employeeId);
   }

   updateEmployee(employeeId:number,employee:any) :Observable<any>{
    return this.http.put(this.baseURL+"/"+employeeId,employee);
  }

  addEmployee(employee:any) :Observable<any>{
    return this.http.post(this.baseURL,employee);
  }

}
