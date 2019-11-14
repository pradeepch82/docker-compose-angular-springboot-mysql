import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SpringBootComponent } from './spring-boot/spring-boot.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app/app-routing.module';


@NgModule({
  declarations: [ //directives,components,pipes
    AppComponent,AddEmployeeComponent,SpringBootComponent,EditEmployeeComponent,DeleteEmployeeComponent
  ],
  imports: [  //modules
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
 providers: [],//services  prior to angular5 
 // providers:[],
  bootstrap: [AppComponent] //component
})
export class AppModule { }
