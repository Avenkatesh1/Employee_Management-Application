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