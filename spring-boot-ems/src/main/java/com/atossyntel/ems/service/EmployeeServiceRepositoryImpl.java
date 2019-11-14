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
			
		
		return repository.findOne(employeId);
	}

	@Override
	public boolean deleteEmployee(int employeeId) {

		Employee employee = repository.findOne(employeeId);

		if (employee != null) {
			repository.delete(employee);
			return true;
		}

		return false;
	}

	@Override
	public boolean updateEmployee(Employee employee) {

		Employee employee1 = repository.findOne(employee.getEmployeeId());

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
