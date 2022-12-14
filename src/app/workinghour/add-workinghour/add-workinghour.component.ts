import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-add-workinghour',
  templateUrl: './add-workinghour.component.html',
  styleUrls: ['./add-workinghour.component.css']
})
export class AddWorkinghourComponent implements OnInit {

  RegistrationForm: FormGroup

  constructor(private http: HttpClient, private https: HttpService) {
    this.RegistrationForm = new FormGroup({
      whid: new FormControl(),
      internId: new FormControl("", [Validators.required, Validators.minLength(4)]),
      monthly: new FormControl("", Validators.required),
      companyWorkingHour: new FormControl("", [Validators.required, Validators.pattern("[0-9]+")]),
      internWorkingHour: new FormControl("", [Validators.required, Validators.pattern("[0-9]+")])
    })
  }

  ngOnInit(): void {
  }

  onAdd() {
    console.log(this.RegistrationForm.value)
    let payload = {
      "whid": +this.RegistrationForm.value.whid,
      "internId": this.RegistrationForm.value.internId,
      "monthly": this.RegistrationForm.value.monthly,
      "companyWorkingHour": this.RegistrationForm.value.companyWorkingHour,
      "internWorkingHour": this.RegistrationForm.value.internWorkingHour
    }
    console.log(payload)
    this.https.AddWorkingHour(payload)
  }

}

