import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  leaverecordlst: {
    leaveId: number,
    internId: string,
    leaveDate: string,
    reason: string,
  }[] = []

  whrecordlst:
    {
      whid: number,
      internId: string,
      monthly: string,
      companyWorkingHour: string,
      internWorkingHour: string,
    }[] = [];

  interndetails: {
    internName: any,
    phoneNumber: any,
    emailId: any,
    internAddress: any,
    internStatus: any,
  } | undefined;

  RegistrationForm: FormGroup;

  constructor(private http: HttpClient) {
    this.RegistrationForm = new FormGroup({
      internId: new FormControl("", [Validators.required, Validators.minLength(4)])
    })
  }

  ngOnInit(): void {
  }

  Search() {
    this.interndetails = {
      internName: "",
      phoneNumber: "",
      emailId: "",
      internAddress: "",
      internStatus: ""
    };
    let id = this.RegistrationForm.value.internId
    let response0 = this.http.get(`https://localhost:44316/api/InternRecord/${id}`)
    response0.subscribe({
      next: (nxt: any) => {
        this.interndetails = nxt;
      },
      error: err => {
      }
    })

    let response = this.http.get(`https://localhost:44316/api/Leave/intern/${id}`)
    response.subscribe({
      next: (nxt: any) => {
        this.leaverecordlst = nxt;
      },
      error: err => {
      }
    })
    let response2 = this.http.get(`https://localhost:44316/api/WorkingHour/intern/${id}`)
    response2.subscribe({
      next: (nxt: any) => {
        this.whrecordlst = nxt;
      },
      error: err => {
      }
    })
  }
}
