import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { IDashboard, IProject } from '../../model/interface/master';
import { EmployeeService } from '../../Services/employee.service';
import { ProjectService } from '../../Services/project.service';
import { Employees } from '../../model/class/employee';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  
  dashboardList!: IDashboard;
  empService = inject(EmployeeService);
  ProjService = inject(ProjectService);
  ProjectList = signal<IProject[]>([]);
  empList = signal<Employees[]>([]);

  ngOnInit(): void {
    this.getDashboardData();
    this.getAllProjects();
    this.getAllEmployees();
  }

  getDashboardData(){
    this.empService.getDashboard().subscribe((data:IDashboard) => {
      this.dashboardList = data;
  });
  }

  
  getAllEmployees(){
    this.empService.getAllEmployee().subscribe((res:Employees[])=>{
      this.empList.set(res);
    });
        
  }

  getAllProjects() {
    this.ProjService.getAllProjects().subscribe((res: IProject[]) => {
      this.ProjectList.set(res);
    });
  }

}
