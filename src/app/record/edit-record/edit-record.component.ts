import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-edit-record',
  templateUrl: './edit-record.component.html',
  styleUrls: ['./edit-record.component.css']
})
export class EditRecordComponent implements OnInit {

  record: any;

  RegistrationForm: FormGroup

  designationlst: any = []

  constructor(private http: HttpClient, private https: HttpService, private activeroute: ActivatedRoute) {
    this.RegistrationForm = new FormGroup({

      internId: new FormControl("", [Validators.required, Validators.minLength(4)]),
      internPassword: new FormControl("", [Validators.required, Validators.minLength(4)]),
      internName: new FormControl("", [Validators.required, Validators.minLength(3)]),
      phoneNumber: new FormControl("", [Validators.pattern("[0-9]{10}")]),
      emailId: new FormControl("", [Validators.email]),
      internAddress: new FormControl("", [Validators.minLength(5)]),
      internStatus: new FormControl(),
      designation: new FormControl("", Validators.required)

    })
  }

  ngOnInit(): void {
    let response1 = this.http.get("https://localhost:44316/api/Designation")
    response1.subscribe({
      next: nxt => {
        this.designationlst = nxt
      },
      error: err => {
        alert("designation not found")
      }
    })

    let id = this.activeroute.snapshot.params['id']
    let response2 = this.http.get(`https://localhost:44316/api/InternRecord/${id}`)
    response2.subscribe({
      next: (nxt: any) => {
        this.RegistrationForm.setValue({
          'internId': nxt.internId,
          'internPassword': nxt.internPassword,
          'internName': nxt.internName,
          'phoneNumber': nxt.phoneNumber,
          'emailId': nxt.emailId,
          'internAddress': nxt.internAddress,
          'internStatus': nxt.internStatus,
          'designation': nxt.designation
        })

      }
    })
  }

  onEdit() {
    console.log(this.RegistrationForm.value)
    let payload = {
      'internId': this.RegistrationForm.value.internId,
      'internPassword': this.RegistrationForm.value.internPassword,
      'internName': this.RegistrationForm.value.internName,
      'phoneNumber': this.RegistrationForm.value.phoneNumber,
      'emailId': this.RegistrationForm.value.emailId,
      'internAddress': this.RegistrationForm.value.internAddress,
      'internStatus': this.RegistrationForm.value.internStatus,
      'designation': +this.RegistrationForm.value.designation,
    }
    console.log(payload)
    this.https.EditRecord(payload)
  }

}
