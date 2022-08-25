import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {

  RegistrationForm: FormGroup

  designationlst: any = []

  constructor(private http: HttpClient, private https: HttpService) {
    this.RegistrationForm = new FormGroup({

      internId: new FormControl("", Validators.required),
      internPassword: new FormControl("", Validators.required),
      internName: new FormControl("", Validators.required),
      phoneNumber: new FormControl(),
      emailId: new FormControl(),
      internAddress: new FormControl(),
      internStatus: new FormControl(),
      designation: new FormControl("", Validators.required)

    })
  }

  ngOnInit(): void {
    let response = this.http.get("https://localhost:44316/api/Designation")
    response.subscribe({
      next: nxt => {
        this.designationlst = nxt
      },
      error: err => {
        alert("designation not found")
      }
    })
  }

  onAdd() {
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
    this.https.AddRecord(payload)
  }

}
