package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.employeerepository.EmployeeRepository;
import com.example.demo.entity.Employees;
import com.example.demo.exception.RecordNotFoundException;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/")
public class EmployeeController {

	@Autowired
	EmployeeRepository repo;

	// Getting All Employees
	@GetMapping("/Employees")

	public List<Employees> getEmployeeDetails() {

		return repo.findAll();

	}

	// Creating Employees

	@PostMapping("/Employees")
	public Employees createEmployee(@RequestBody Employees employee) {

		return repo.save(employee);

	}

	// Get Employee Details By ID

	@GetMapping("/Employees/{id}")
	public ResponseEntity<Employees> getEmployeeById(@PathVariable int id) {

		Employees employee = repo.findById(id)
				.orElseThrow(() -> new RecordNotFoundException("Employee Not Found In The Database" + id));
		return ResponseEntity.ok(employee);

	}

	// Update Employee Details

	@PutMapping("/Employees/{id}")
	public ResponseEntity<Employees> updateEmployee(@PathVariable int id, @RequestBody Employees employeeDetails) {

		Employees employee = repo.findById(id)
				.orElseThrow(() -> new RecordNotFoundException("Employee Details Not Found for the Id :" + id));

		employee.setFirstName(employeeDetails.getFirstName());
		employee.setLastName(employeeDetails.getLastName());
		employee.setDepartment(employeeDetails.getDepartment());
		employee.setEmail(employeeDetails.getEmail());

		Employees updatedEmployees = repo.save(employee);

		return ResponseEntity.ok(updatedEmployees);

	}

	@DeleteMapping("/Employees/{id}")

	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable int id) {

		Employees employee = repo.findById(id)
				.orElseThrow(() -> new RecordNotFoundException("Employee Details Not Found for the Id :" + id));

		repo.deleteById(id);

		Map<String, Boolean> response = new HashMap<>();

		response.put("Deleted", Boolean.TRUE);

		return ResponseEntity.ok(response);

	}

}
