import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddDesignationComponent } from './designation/add-designation/add-designation.component';
import { DesignationComponent } from './designation/designation.component';
import { EditDesignationComponent } from './designation/edit-designation/edit-designation.component';
import { AddLeaveComponent } from './leave/add-leave/add-leave.component';
import { EditLeaveComponent } from './leave/edit-leave/edit-leave.component';
import { LeaveComponent } from './leave/leave.component';
import { LoginComponent } from './login/login.component';
import { AddRecordComponent } from './record/add-record/add-record.component';
import { EditRecordComponent } from './record/edit-record/edit-record.component';
import { RecordComponent } from './record/record.component';
import { RegisterComponent } from './register/register.component';
import { StatusComponent } from './status/status.component';
import { AddWorkinghourComponent } from './workinghour/add-workinghour/add-workinghour.component';
import { EditWorkinghourComponent } from './workinghour/edit-workinghour/edit-workinghour.component';
import { WorkinghourComponent } from './workinghour/workinghour.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "record", component: RecordComponent, canActivate: [AuthGuard] },
  { path: "designation", component: DesignationComponent, canActivate: [AuthGuard] },
  { path: "addrecord", component: AddRecordComponent, canActivate: [AuthGuard] },
  { path: "editrecord/:id", component: EditRecordComponent, canActivate: [AuthGuard] },
  { path: "editdesignation/:id", component: EditDesignationComponent, canActivate: [AuthGuard] },
  { path: "adddesignation", component: AddDesignationComponent, canActivate: [AuthGuard] },
  { path: "designation", component: DesignationComponent, canActivate: [AuthGuard] },
  { path: "addleave", component: AddLeaveComponent, canActivate: [AuthGuard] },
  { path: "editleave/:id", component: EditLeaveComponent, canActivate: [AuthGuard] },
  { path: "leave", component: LeaveComponent, canActivate: [AuthGuard] },
  { path: "workinghour", component: WorkinghourComponent, canActivate: [AuthGuard] },
  { path: "editworkinghour/:id", component: EditWorkinghourComponent, canActivate: [AuthGuard] },
  { path: "addworkinghour", component: AddWorkinghourComponent, canActivate: [AuthGuard] },
  { path: "status", component: StatusComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
