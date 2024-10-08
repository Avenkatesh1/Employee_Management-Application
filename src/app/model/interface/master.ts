export interface IAPIResponceModel {
    message: string;
    result:boolean;
    data: any;
}

export interface IParentDept {
    departmentId: Number,
    departmentName: string,
    departmentLogo: string
}

export interface IChildDept {
    childDeptId: Number,
    parentDeptId: number,
    departmentName: string
}
export interface IProject {
    projectId: number,
    projectName: string,
    clientName: string,
    startDate: string,
    leadByEmpId: number,
    contactPerson: string,
    contactNo: string,
    emailId: string
}

export interface IProjectEmp {
    empProjectId: number,
    projectId: number,
    empId: number,
    assignedDate: string,
    role: string,
    isActive: false,
}

export interface IDashboard {
    totalEmployee: number,
    totalProject: number,
    recentEmployee: string,
    recentProjects: string,
}
