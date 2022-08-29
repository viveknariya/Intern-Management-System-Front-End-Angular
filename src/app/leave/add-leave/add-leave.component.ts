import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-add-leave',
  templateUrl: './add-leave.component.html',
  styleUrls: ['./add-leave.component.css']
})
export class AddLeaveComponent implements OnInit {

  RegistrationForm: FormGroup

  constructor(private https: HttpService) {
    this.RegistrationForm = new FormGroup({
      internId: new FormControl("", [Validators.required, Validators.minLength(4)]),
      leaveId: new FormControl(),
      leaveDate: new FormControl("", Validators.required),
      reason: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onAdd() {
    console.log(this.RegistrationForm.value)
    let payload = {
      "internId": this.RegistrationForm.value.internId,
      "leaveDate": this.RegistrationForm.value.leaveDate,
      "reason": this.RegistrationForm.value.reason
    }
    this.https.AddLeave(payload)
  }

}
