import { Router } from '@angular/router';
import { Employees } from '../employees';
import { EmployeeServiceService } from './../employee-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employees = new Employees();

  constructor(
    private EmployeeService: EmployeeServiceService,
    private Router: Router
  ) {}

  ngOnInit(): void {}
  
  createEmployee() {
    this.EmployeeService.createEmployeeDetails(this.employee).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  onSubmit() {
    console.log(this.employee);
    this.createEmployee();

    this.Router.navigate(['employees']);
  }
}
