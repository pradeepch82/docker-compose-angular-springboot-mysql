package com.atossyntel.ems.reposiotry;

import org.springframework.stereotype.Repository;

import com.atossyntel.ems.model.Employee;


@Repository("employeeReposiotry")
public interface EmployeeReposiotry extends  JPARepository<Employee, Integer> {

}
