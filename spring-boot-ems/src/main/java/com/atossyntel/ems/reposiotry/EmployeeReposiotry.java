package com.atossyntel.ems.reposiotry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.atossyntel.ems.model.Employee;


@Repository("employeeReposiotry")
public interface EmployeeReposiotry extends  JpaRepository<Employee, Integer> {

}
