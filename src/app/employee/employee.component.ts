import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../../models/Employee';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employee: Employee;
  employees: Employee[];
  employeesByDesg: Employee[];
  errMsg: string;
  constructor(private empSvc: EmployeeService) {
    this.employee = new Employee(0, "", "", 0, "");
    this.employees = [];
    this.employeesByDesg = [];
    this.errMsg = "";
    this.getAll();
  }
  getAll() {
    this.empSvc.getAll().subscribe({
      next: (response: Employee[]) => {
        this.employees = response;
      }, error: (err) => alert(err.error)
    });
  }
  getEmployee() {
    this.empSvc.getEmployeeById(this.employee.empId).subscribe({
      next: (response: Employee) => {
        this.employee = response;
      }, error: (err) => alert(err.error)
    });
  }
  getEmployeeByDesg() {
    this.empSvc.getEmployeeByDesg(this.employee.designation).subscribe({
      next: (response: Employee[]) => {
        this.employeesByDesg = response;
      }, error: (err) => { this.employeesByDesg = []; this.errMsg = err.error;alert(err.error) }
    })
  }
  addEmployee() {
    this.empSvc.addEmployee(this.employee).subscribe({
      next: (response: any) => {
        alert("New Employee Added");
        this.employee = new Employee(0, "", "", 0, "");
        this.getAll();
        //this.errMsg = "";
      }, error: (err) => alert(err.error)
    });
  }
  updateEmployee() {
    this.empSvc.updateEmployee(this.employee.empId, this.employee).subscribe({
      next: (response: Employee) => {
        alert("Employee Updated Successfully");
        this.employee = new Employee(0, "", "", 0, "");
        this.getAll();
      }, error: (err) => alert(err.error)
    });
  }
  deleteEmployee() {
    this.empSvc.deleteEmployee(this.employee.empId).subscribe({
      next: (response: Employee) => {
        alert("Employee Deleted");
        this.employee = new Employee(0, "", "", 0, "");
        this.getAll();
      }, error: (err) => alert(err.error)
    });
  }
}
