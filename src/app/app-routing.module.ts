import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { AddWorkinghourComponent } from './workinghour/add-workinghour/add-workinghour.component';
import { EditWorkinghourComponent } from './workinghour/edit-workinghour/edit-workinghour.component';
import { WorkinghourComponent } from './workinghour/workinghour.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "record", component: RecordComponent },
  { path: "designation", component: DesignationComponent },
  { path: "addrecord", component: AddRecordComponent },
  { path: "editrecord/:id", component: EditRecordComponent },
  { path: "editdesignation/:id", component: EditDesignationComponent },
  { path: "adddesignation", component: AddDesignationComponent },
  { path: "designation", component: DesignationComponent },
  { path: "addleave", component: AddLeaveComponent },
  { path: "editleave/:id", component: EditLeaveComponent },
  { path: "leave", component: LeaveComponent },
  { path: "workinghour", component: WorkinghourComponent },
  { path: "editworkinghour/:id", component: EditWorkinghourComponent },
  { path: "addworkinghour", component: AddWorkinghourComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
