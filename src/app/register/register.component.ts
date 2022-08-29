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

  passCheck: boolean = false;

  designationlst: {
    designationId: number,
    designationName: string,
    roleName: string,
    departmentName: string,
  }[] = [];

  constructor(private http: HttpClient, private https: HttpService) {
    this.RegistrationForm = new FormGroup({

      internId: new FormControl("", [Validators.required, Validators.minLength(4)]),
      internPassword: new FormControl("", [Validators.required, Validators.minLength(4)]),
      internName: new FormControl("", [Validators.required, Validators.minLength(3), Validators.pattern("[a-z A-Z]+")]),
      phoneNumber: new FormControl("", [Validators.pattern("[0-9]{10}")]),
      emailId: new FormControl("", [Validators.email]),
      internAddress: new FormControl("", [Validators.minLength(5)]),
      internStatus: new FormControl(),
      designation: new FormControl("", Validators.required),
      confirmPassword: new FormControl("", [Validators.required, Validators.minLength(4)])


    })
  }
  ngOnInit(): void {
    let response = this.http.get("https://localhost:44316/api/Designation")
    response.subscribe({
      next: (nxt: any) => {
        this.designationlst = nxt
      },
      error: err => {
        alert("designation not found")
      }
    })

    this.RegistrationForm.get('confirmPassword')?.valueChanges.subscribe(value => {
      this.checkConfirmPassword()
    })
    this.RegistrationForm.get('internPassword')?.valueChanges.subscribe(value => {
      this.checkConfirmPassword()
    })
  }

  onSubmit() {
    let payload = {
      'designation': +this.RegistrationForm.value.designation,
      'emailId': this.RegistrationForm.value.emailId,
      'internAddress': this.RegistrationForm.value.internAddress,
      'internId': this.RegistrationForm.value.internId,
      'internName': this.RegistrationForm.value.internName,
      'internPassword': this.RegistrationForm.value.internPassword,
      'internStatus': this.RegistrationForm.value.internStatus,
      'phoneNumber': this.RegistrationForm.value.phoneNumber
    }

    this.https.Register(payload)
  }

  checkConfirmPassword() {
    console.log(this.RegistrationForm)
    if (!(this.RegistrationForm.get('internPassword')?.dirty && this.RegistrationForm.get('confirmPassword')?.dirty)) {
      return
    }
    console.log(this.RegistrationForm)
    if (this.RegistrationForm.get('internPassword')?.value != this.RegistrationForm.get('confirmPassword')?.value) {
      this.RegistrationForm.get('internPassword')?.setErrors({ confirmpassword: true })
    }
    else {
      this.passCheck = true;
      this.RegistrationForm.get('internPassword')?.setErrors(null)
    }
  }


}
