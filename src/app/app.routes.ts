import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { EmployeeComponent } from './Pages/employee/employee.component';
import { ProjectComponent } from './Pages/project/project.component';
import { EmpolyeeProjectComponent } from './Pages/empolyee-project/empolyee-project.component';

export const routes: Routes = [

    {
        path:"",
        redirectTo:"Login",
        pathMatch:"full"
    },
    {
        path:"Login",
        component: LoginComponent
    },
    {
        path:"",
        component: LayoutComponent,
        children:[
            {
                path:"Dashboard",
                component: DashboardComponent
            },
            {
                path:"Employee",
                component: EmployeeComponent
            },
            {
                path:"Project",
                component: ProjectComponent
            },
            {
                path:"Employee-Project",
                component: EmpolyeeProjectComponent
            }
        ]
    }
];
