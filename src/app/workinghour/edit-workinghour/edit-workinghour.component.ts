import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-edit-workinghour',
  templateUrl: './edit-workinghour.component.html',
  styleUrls: ['./edit-workinghour.component.css']
})
export class EditWorkinghourComponent implements OnInit {

  RegistrationForm: FormGroup

  constructor(private http: HttpClient, private https: HttpService, private activeroute: ActivatedRoute) {
    this.RegistrationForm = new FormGroup({
      whid: new FormControl(),
      internId: new FormControl("", [Validators.required, Validators.minLength(4)]),
      monthly: new FormControl("", Validators.required),
      companyWorkingHour: new FormControl("", [Validators.required, Validators.pattern("[0-9]+")]),
      internWorkingHour: new FormControl("", [Validators.required, Validators.pattern("[0-9]+")])
    })
  }

  ngOnInit(): void {
    let id = this.activeroute.snapshot.params['id']
    let response = this.http.get(`https://localhost:44316/api/WorkingHour/${id}`)
    response.subscribe({
      next: (nxt: any) => {
        console.log(nxt)
        this.RegistrationForm.setValue({
          'whid': nxt.whid,
          'internId': nxt.internId,
          'monthly': nxt.monthly,
          'companyWorkingHour': nxt.companyWorkingHour,
          'internWorkingHour': nxt.internWorkingHour
        })
      }
    })
  }

  onEdit() {
    console.log(this.RegistrationForm.value)
    let payload = {
      "whid": +this.RegistrationForm.value.whid,
      "internId": this.RegistrationForm.value.internId,
      "monthly": this.RegistrationForm.value.monthly,
      "companyWorkingHour": this.RegistrationForm.value.companyWorkingHour,
      "internWorkingHour": this.RegistrationForm.value.internWorkingHour
    }
    console.log(payload)
    this.https.EditWorkingHour(payload)
  }

}
