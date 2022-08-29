import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RecordComponent } from './record/record.component';
import { AddRecordComponent } from './record/add-record/add-record.component';
import { EditRecordComponent } from './record/edit-record/edit-record.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { DesignationComponent } from './designation/designation.component';
import { AddDesignationComponent } from './designation/add-designation/add-designation.component';
import { EditDesignationComponent } from './designation/edit-designation/edit-designation.component';
import { LeaveComponent } from './leave/leave.component';
import { AddLeaveComponent } from './leave/add-leave/add-leave.component';
import { EditLeaveComponent } from './leave/edit-leave/edit-leave.component';
import { WorkinghourComponent } from './workinghour/workinghour.component';
import { AddWorkinghourComponent } from './workinghour/add-workinghour/add-workinghour.component';
import { EditWorkinghourComponent } from './workinghour/edit-workinghour/edit-workinghour.component';
import { StatusComponent } from './status/status.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecordComponent,
    AddRecordComponent,
    EditRecordComponent,
    RegisterComponent,
    HeaderComponent,
    DesignationComponent,
    AddDesignationComponent,
    EditDesignationComponent,
    LeaveComponent,
    AddLeaveComponent,
    EditLeaveComponent,
    WorkinghourComponent,
    AddWorkinghourComponent,
    EditWorkinghourComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
