import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAPIResponceModel, IProject } from '../model/interface/master';
import { Observable } from 'rxjs';
import { Employees } from '../model/class/employee';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
   
  apiUrl = 'https://projectapi.gerasim.in/api/EmployeeManagement/';

  constructor(private http:HttpClient) { }

  getProjectEmpId(id:number):Observable<IProject>{
    return this.http.get<IProject>(this.apiUrl +"GetProject/" + id);
  }

  createProducts(obj:Employees):Observable<IProject>{
    return this.http.post<IProject>(`${this.apiUrl}CreateProject`, obj);
  }

  updateProducts(obj:IProject):Observable<IProject>{
    return this.http.put<IProject>(this.apiUrl + "UpdateProject/"+ obj.projectId, obj);
  }

  getAllProjects():Observable<IProject[]>{
    return this.http.get<IProject[]>(`${this.apiUrl}GetAllProjects`);
  }

  deleteProject(id:number):Observable<IProject>{
    return this.http.delete<IProject>(this.apiUrl + "DeleteProject/"+id);
  }
}
