package com.atossyntel.ems.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.atossyntel.ems.model.Employee;
import com.atossyntel.ems.reposiotry.EmployeeReposiotry;

@Service("employeeServiceRepositoryImpl")
public class EmployeeServiceRepositoryImpl implements EmployeeService {

	@Autowired
	private EmployeeReposiotry repository;

	@Override
	public Employee findEmployee(int employeId) {
		// TODO Auto-generated method stub
			
		
		return repository.findById(employeId).get();
	}

	@Override
	public boolean deleteEmployee(int employeeId) {

		Employee employee = repository.findById(employeeId).get();

		if (employee != null) {
			repository.delete(employee);
			return true;
		}

		return false;
	}

	@Override
	public boolean updateEmployee(Employee employee) {

		Employee employee1 = repository.findById(employee.getEmployeeId()).get();

		if (employee1 != null) {
			return repository.save(employee) == employee;

		}
			return false;
	}

	@Override
	public boolean addEmployee(Employee employee) {
		return repository.save(employee)==employee;
	}

	@Override
	public List<Employee> findAllEmployees() {
		
		return repository.findAll();
	}

}
