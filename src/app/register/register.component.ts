import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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

  onSubmit() {
    this.https.Register(this.RegistrationForm.value)
  }


}
