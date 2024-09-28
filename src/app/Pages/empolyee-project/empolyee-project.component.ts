import { Component, inject, OnInit, signal } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';
import { EmployeeProject, Employees } from '../../model/class/employee';
import { DatePipe } from '@angular/common';
import { IAPIResponceModel, IProject } from '../../model/interface/master';
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../../Services/project.service';

@Component({
  selector: 'app-empolyee-project',
  standalone: true,
  imports: [DatePipe, FormsModule],
  templateUrl: './empolyee-project.component.html',
  styleUrl: './empolyee-project.component.css'
})
export class EmpolyeeProjectComponent implements OnInit {

ProjectEmpList =  signal<EmployeeProject[]>([]);
EmpList =  signal<any[]>([]);
ProjectList =  signal<any[]>([]);
empService = inject(EmployeeService);
projectService = inject(ProjectService);
projectEmployeeObject: EmployeeProject = new EmployeeProject();


ngOnInit(): void {
  this.getAllProjectEmployee();
  this.getAllProjects();
  this.getAllEmployees();
}

getAllProjectEmployee(){
  this.empService.getAllProjectEmployee().subscribe((res:EmployeeProject[])=>{
    this.ProjectEmpList.set(res);
  });
}


getAllProjects(){
  this.projectService.getAllProjects().subscribe((res: IProject[]) => {
    this.ProjectList.set(res);
  });     
}



getAllEmployees(){
  this.empService.getAllEmployee().subscribe((res:Employees[])=>{
    this.EmpList.set(res);
  });
}      

onSaveProjectEmployee(){
  this.empService.saveProjectEmployee(this.projectEmployeeObject).subscribe((res:IAPIResponceModel)=>{
      this.getAllProjectEmployee();
      alert("Project_Employees saved successfully");
      this.projectEmployeeObject = new EmployeeProject();
   
  },error=>{
    alert("API error occurred while saving employee");
})
}

onEditEmpProject(data:EmployeeProject){
  this.projectEmployeeObject = data; 
}
onUpdateProjectEmployee(){
    this.empService.updateProjectEmployee(this.projectEmployeeObject).subscribe((res:IAPIResponceModel)=>{
      debugger
        alert("Employee updated successfully");
        this.getAllProjectEmployee();
        this.projectEmployeeObject = new EmployeeProject();
     
    },error=>{
      alert("API error occurred while updating employee");
  })
 }


onDeleteEmployee(id:number){
  const isDelete = confirm("Are you sure you want to delete this employee from your account?");
  if(isDelete){
    this.empService.deleteProjectEmployee(id).subscribe((res:IAPIResponceModel)=>{
      debugger
        alert("Employee Deleted successfully");
        this.onSaveProjectEmployee();
        this.projectEmployeeObject = new EmployeeProject();
     
    },error=>{
      alert("API error occurred while saving employee");
  })
  }
}

}