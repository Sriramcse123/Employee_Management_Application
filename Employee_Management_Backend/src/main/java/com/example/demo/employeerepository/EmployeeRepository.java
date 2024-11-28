package com.example.demo.employeerepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Employees;

@Repository
public interface EmployeeRepository extends JpaRepository<Employees,Integer>{

}
