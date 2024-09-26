import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAPIResponceModel } from '../model/interface/master';
import { Observable } from 'rxjs';
import { Employees } from '../model/class/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   apiUrl = 'https://projectapi.gerasim.in/api/EmployeeManagement/';
  constructor(private http:HttpClient) { }

  getParentDepartment():Observable<IAPIResponceModel>{
    return this.http.get<IAPIResponceModel>(this.apiUrl + "GetParentDepartment");
  }

  getChildDepartment(deptId:number):Observable<IAPIResponceModel>{
    return this.http.get<IAPIResponceModel>(`${this.apiUrl}GetChildDepartmentByParentId?deptId=${deptId}`);
  }

  saveEmployee(obj:Employees):Observable<IAPIResponceModel>{
    debugger
    return this.http.post<IAPIResponceModel>(this.apiUrl + "CreateEmployee", obj);
  }

  getAllEmployee():Observable<Employees[]>{
    return this.http.get<Employees[]>(this.apiUrl + "GetAllEmployees");
  }
}
