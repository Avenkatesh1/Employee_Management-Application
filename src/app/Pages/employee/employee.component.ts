import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';
import { IAPIResponceModel, IChildDept, IParentDept } from '../../model/interface/master';
import { FormsModule } from '@angular/forms';
import { Employees } from '../../model/class/employee';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  isFormVisbility = signal<boolean>(false);
  employeeService = inject(EmployeeService);
  parentDeportmentList =  signal<IParentDept[]>([]);
  childDeportmentList =  signal<IChildDept[]>([]);
  employeeList =  signal<Employees[]>([]);
  parentDeportmnetId: number = 0;
  employeeObject: Employees = new Employees();
  
  ngOnInit(): void {
    this.getAllParentDepartments();
    this.getAllEmployees();
  }
  getAllParentDepartments(){
    this.employeeService.getParentDepartment().subscribe((res:IAPIResponceModel)=>{
        this.parentDeportmentList.set(res.data);
    })
  }
  onSaveEmployee(){
    debugger
    this.employeeService.saveEmployee(this.employeeObject).subscribe((res:IAPIResponceModel)=>{
      debugger
        alert("Employee saved successfully");
        this.getAllEmployees();
        this.employeeObject = new Employees();
     
    },error=>{
      alert("API error occurred while saving employee");
  })
  }

  onEditEmployee(obj:Employees){

  }
  onDeleteEmployee(id:number){

  }

  getAllEmployees(){
    this.employeeService.getAllEmployee().subscribe((res:Employees[])=>{
      this.employeeList.set(res);
    });
        
  }

  onParentDeptChange(){
    this.employeeService.getChildDepartment(this.parentDeportmnetId).subscribe((res:IAPIResponceModel)=>{
        this.childDeportmentList.set(res.data);
    })
  }
}
