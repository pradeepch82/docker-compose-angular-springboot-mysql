package com.atossyntel.ems.service;

import java.util.List;

import com.atossyntel.ems.model.Employee;

public interface EmployeeService {

	Employee findEmployee(int employeId);

	boolean deleteEmployee(int employeeId);

	boolean updateEmployee(Employee employee);

	boolean addEmployee(Employee employee);

	List<Employee> findAllEmployees();

}
