package com.atossyntel.ems.dao;

import java.util.List;

import com.atossyntel.ems.model.Employee;

public interface EmployeeDao {

	Employee findEmployee(int employeId);

	boolean deleteEmployee(int employeeId);

	boolean updateEmployee(Employee employee);

	boolean addEmployee(Employee employee);

	List<Employee> findAllEmployees();
}
