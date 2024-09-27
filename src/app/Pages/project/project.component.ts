import { Component, inject, OnInit, signal } from '@angular/core';
import { ProjectService } from '../../Services/project.service';
import { IAPIResponceModel, IProject } from '../../model/interface/master';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../../Services/employee.service';
import { Observable } from 'rxjs';
import { Employees } from '../../model/class/employee';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent implements OnInit {
  isProjectFormVisible = signal<boolean>(false);
  projectService = inject(ProjectService);
  empService = inject(EmployeeService);
  projectList = signal<IProject[]>([]);

  activeroute = inject(ActivatedRoute);
  projectForm: FormGroup = new FormGroup({});
  empList$: Observable<Employees[]> = new Observable<[]>();

  constructor() {
    this.empList$ = this.empService.getAllEmployee();
    this.initilizingForm();
  }

  initilizingForm(data?: IProject) {
    this.projectForm = new FormGroup({
      projectId: new FormControl(data? data.projectId: 0),
      projectName: new FormControl(data? data.projectName:''),
      clientName: new FormControl(data? data.clientName:''),
      startDate: new FormControl(data? data.startDate:''),
      leadByEmpId: new FormControl(data? data.leadByEmpId:''),
      contactPerson: new FormControl(data? data.contactPerson:''),
      contactNo: new FormControl(data? data.contactNo:''),
      emailId: new FormControl(data? data.emailId:''),
    });
  }

  ngOnInit(): void {
    this.getAllProjects()
  }

  onSave() {
    const formValue = this.projectForm.value;
    this.projectService.createProducts(formValue).subscribe((res: IProject) => {
        alert('Employee saved successfully');
        this.getAllProjects();
        this.initilizingForm();
      },
      (error) => {
        alert('API error occurred while saving employee');
      }
    );
  }

  onUpdate() {
    const formValue = this.projectForm.value;
    this.projectService.updateProducts(formValue).subscribe((res: IProject) => {
        alert('Employee Updated successfully');
        this.getAllProjects();
        this.initilizingForm();
      },
      (error) => {
        alert('API error occurred while saving employee');
      }
    );
  }
  
  getAllProjects(){
    this.projectService.getAllProjects().subscribe((res: IProject[]) => {
      this.projectList.set(res);
    });     
  }

  onEdit(id:number){
     this.isProjectFormVisible.set(true);
  }

  onDelete(id:number){
    const isDelete = confirm("Are you sure you want to delete this project?");
    if(isDelete){
      this.projectService.deleteProject(id).subscribe((res: IProject) => {
        alert('Employee Deleted successfully');
        this.getAllProjects();
        this.initilizingForm();
      },
      (error) => {
        alert('API error occurred while saving employee');
      }
    );
    }
  }
  
}
