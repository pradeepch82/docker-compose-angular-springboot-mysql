package com.atossyntel.ems.model;

import java.io.Serializable;
import java.util.Date;
import java.util.Random;

import javax.persistence.Entity;
import javax.persistence.Id;



@Entity(name="pc_employees")
public class Employee implements Serializable{

	
	 @Id
	 private int employeeId;
	 private String fname;
     private String lname;
     private double salary;
     private String email;
     private Date doj;
     private String mobile;
     private String pan;
     
     public Employee() {
    	 this.employeeId=new Random().nextInt(100000);
    	 this.doj=new Date();
     }

	public Employee(String fname, String lname, double salary, String mobile, String pan) {
		this.employeeId=new Random().nextInt(100000);
		this.fname = fname;
		this.lname = lname;
		this.email=this.fname+"_"+this.lname+"@syntelinc.com";
		this.salary = salary;
		this.mobile = mobile;
		this.pan = pan;
		this.doj=new Date();
	}

	public int getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public double getSalary() {
		return salary;
	}

	public void setSalary(double salary) {
		this.salary = salary;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Date getDoj() {
		return doj;
	}

	public void setDoj(Date doj) {
		this.doj = doj;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getPan() {
		return pan;
	}

	public void setPan(String pan) {
		this.pan = pan;
	}

	@Override
	public String toString() {
		return "Employee [employeeId=" + employeeId + ", fname=" + fname + ", lname=" + lname + ", salary=" + salary
				+ ", email=" + email + ", doj=" + doj + ", mobile=" + mobile + ", pan=" + pan + "]";
	}
        
     
     
	
}
