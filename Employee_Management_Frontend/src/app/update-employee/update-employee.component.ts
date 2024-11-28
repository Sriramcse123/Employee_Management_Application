import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { Employees } from '../employees';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  employee: Employees = new Employees();
  id!: number;

  constructor(
    private employeeService: EmployeeServiceService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(
      (data) => {
        this.employee = data;
      },
      (error) => console.log(error)
    );
  }

  UpdateEmployee() {
    this.employeeService
      .updateEmployeeDetails(this.id, this.employee)
      .subscribe((data) => {
        console.log(data);
        this.employee = new Employees();
        this.getEmployeeDetails();
      });
  }

  getEmployeeDetails() {
    this.router.navigate(['employees']);
  }
}
