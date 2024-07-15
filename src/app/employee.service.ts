import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  
  baseUrl: string;
  constructor(private http: HttpClient) {
    
    this.baseUrl = "http://localhost:5087/api/Employee/";
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      //'Authorization':"Bearer "+token
    })
  };
  getAll(): Observable<Employee[]> {
   return  this.http.get<Employee[]>(this.baseUrl);
  }

  getEmployeeById(eid: number): Observable<Employee> {
    return this.http.get<Employee>(this.baseUrl + "ById/" + eid, this.httpOptions);
  }
  getEmployeeByDesg(desg: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl + "ByDesg/" + desg, this.httpOptions);
  }
  addEmployee(emp: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl, JSON.stringify(emp), this.httpOptions);
  }
  updateEmployee(eid: number, emp: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.baseUrl + eid, emp, this.httpOptions);
  }
  deleteEmployee(eid: number): Observable<Employee> {
    return this.http.delete<Employee>(this.baseUrl + eid, this.httpOptions);
  }
}
