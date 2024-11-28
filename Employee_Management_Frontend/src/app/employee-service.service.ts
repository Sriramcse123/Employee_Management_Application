import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employees } from './employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {


  private url="http://localhost:8080/api/v1/Employees";
  constructor(private http:HttpClient) { }

  getEmployeeDetails(): Observable<Employees[]>{
  return this.http.get<Employees[]>(`${this.url}`);
}

createEmployeeDetails(Employee: Employees): Observable<any>{
  return this.http.post(`${this.url}`,Employee);
}


getEmployeeById(id:number): Observable<Employees>{
  return this.http.get<Employees>(`${this.url}/${id}`);
}


updateEmployeeDetails(id:number,Employee:Employees): Observable<Employees>{
  return this.http.put<Employees>(`${this.url}/${id}`,Employee);
}

deleteEmployeeDetails(id:number): Observable<object>{

  return this.http.delete(`${this.url}/${id}`);
}




}









