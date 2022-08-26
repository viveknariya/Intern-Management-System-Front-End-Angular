import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-edit-leave',
  templateUrl: './edit-leave.component.html',
  styleUrls: ['./edit-leave.component.css']
})
export class EditLeaveComponent implements OnInit {

  RegistrationForm: FormGroup

  constructor(private http: HttpClient, private https: HttpService, private activeroute: ActivatedRoute) {
    this.RegistrationForm = new FormGroup({
      leaveId: new FormControl("", Validators.required),
      internId: new FormControl(),
      leaveDate: new FormControl("", Validators.required),
      reason: new FormControl()
    })
  }

  ngOnInit(): void {
    let id = this.activeroute.snapshot.params['id']
    let response = this.http.get(`https://localhost:44316/api/Leave/${id}`)
    response.subscribe({
      next: (nxt: any) => {
        this.RegistrationForm.setValue({
          'leaveId': nxt.leaveId,
          'internId': nxt.internId,
          'leaveDate': nxt.leaveDate,
          'reason': nxt.reason
        })
      }
    })
  }

  onEdit() {
    this.https.EditLeave(this.RegistrationForm.value)
  }

}