import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-edit-designation',
  templateUrl: './edit-designation.component.html',
  styleUrls: ['./edit-designation.component.css']
})
export class EditDesignationComponent implements OnInit {

  RegistrationForm: FormGroup

  constructor(private http: HttpClient, private https: HttpService, private activeroute: ActivatedRoute) {
    this.RegistrationForm = new FormGroup({
      designationId: new FormControl(),
      designationName: new FormControl("", Validators.required),
      roleName: new FormControl("", Validators.required),
      departmentName: new FormControl("", Validators.required)
    })
  }

  ngOnInit(): void {
    let id = this.activeroute.snapshot.params['id']
    let response = this.http.get(`https://localhost:44316/api/Designation/${id}`)
    response.subscribe({
      next: (nxt: any) => {
        this.RegistrationForm.setValue({
          'designationId': nxt.designationId,
          'designationName': nxt.designationName,
          'roleName': nxt.roleName,
          'departmentName': nxt.departmentName
        })
      }
    })
  }

  onEdit() {
    this.https.EditDesignation(this.RegistrationForm.value)
  }

}
