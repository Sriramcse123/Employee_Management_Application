import { Router } from '@angular/router';
import { EmployeeServiceService } from './../employee-service.service';
import { Component, OnInit } from '@angular/core';
import { Employees } from '../employees';

@Component({
  selector: 'app-employee-list-component',
  templateUrl: './employee-list-component.component.html',
  styleUrls: ['./employee-list-component.component.css'],
})
export class EmployeeListComponentComponent implements OnInit {
  employee!: Employees[];

  constructor(
    private EmployeeService: EmployeeServiceService,
    private Route: Router
  ) {}

  ngOnInit(): void {
    this.getEmployee();
  }

  private getEmployee() {
    this.EmployeeService.getEmployeeDetails().subscribe((data) => {
      console.log(data);
      this.employee = data;
    });
  }

  updateEmployee(id: number) {
    this.Route.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number) {
    this.EmployeeService.deleteEmployeeDetails(id).subscribe(
      (data) => {
        console.log(data);
        this.getEmployee();
      },
      (error) => console.log(error)
    );
  }
}
