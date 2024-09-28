export class Employees {
    employeeId: number;
    employeeName: string;
    contactNo: string;
    emailId: string;
    deptId: number
    password: string;
    gender: string;
    role: string;
    createdDate: any;

    constructor(){
        this.employeeId = 0;
        this.employeeName = '';
        this.contactNo = '';
        this.emailId = '';
        this.deptId = 0;
        this.password = '';
        this.gender = '';
        this.role = '';
        this.createdDate = new Date();
        
  }
}

export class EmployeeProject {
  empProjectId: number;
  projectId: number;
  empId: number;
  assignedDate: any;
  role: string;
  isActive: boolean;
  projectName: string;
  employeeName: string;

  constructor(){
      this.empProjectId = 0;
      this.projectId = 0;
      this.empId = 0;
      this.assignedDate = new Date();
      this.role = '';
      this.isActive = true;
      this.projectName = '';
      this.employeeName = '';
      
}
}
