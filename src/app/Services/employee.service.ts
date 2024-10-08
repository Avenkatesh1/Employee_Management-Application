import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAPIResponceModel, IDashboard } from '../model/interface/master';
import { Observable } from 'rxjs';
import { EmployeeProject, Employees } from '../model/class/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   apiUrl = 'https://projectapi.gerasim.in/api/EmployeeManagement/';
  constructor(private http:HttpClient) { }

  
  getDashboard():Observable<IDashboard>{
    return this.http.get<IDashboard>(this.apiUrl + "GetDashboard");
  }


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

  updateEmployee(obj:Employees):Observable<IAPIResponceModel>{
    debugger
    return this.http.put<IAPIResponceModel>(this.apiUrl + "UpdateEmployee/" + obj.employeeId, obj);
  }

  deleteEmployee(id:number):Observable<IAPIResponceModel>{
    debugger
    return this.http.delete<IAPIResponceModel>(this.apiUrl + "DeleteEmployee/"+id);
  }

  getAllEmployee():Observable<Employees[]>{
    return this.http.get<Employees[]>(this.apiUrl + "GetAllEmployees");
  }

  getAllProjectEmployee():Observable<EmployeeProject[]>{
    return this.http.get<EmployeeProject[]>(this.apiUrl + "GetAllProjectEmployees");
  }
  saveProjectEmployee(obj:EmployeeProject):Observable<EmployeeProject>{
    return this.http.post<EmployeeProject>(this.apiUrl + "CreateProjectEmployee", obj);
  }

  updateProjectEmployee(obj:EmployeeProject):Observable<EmployeeProject>{
    return this.http.put<EmployeeProject>(this.apiUrl + "UpdateProjectEmployee/" + obj.empProjectId, obj);
  }

  deleteProjectEmployee(id:number):Observable<EmployeeProject>{
    return this.http.delete<EmployeeProject>(this.apiUrl + "DeleteProjectEmployee/"+id);
  }
}

