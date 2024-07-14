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
    
    this.baseUrl = "http://localhost:5066/api/Employee/";
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
    return this.http.get<Employee>(this.baseUrl +"ById/"+ eid);
  }
  getEmployeeByDesg(desg: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl + "ByDesg/" + desg);
  }
  addEmployee(emp: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl,emp);
  }
  updateEmployee(eid: number, emp: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.baseUrl + eid, emp);
  }
  deleteEmployee(eid: number): Observable<Employee> {
    return this.http.delete<Employee>(this.baseUrl + eid);
  }
}
