import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-add-designation',
  templateUrl: './add-designation.component.html',
  styleUrls: ['./add-designation.component.css']
})
export class AddDesignationComponent implements OnInit {

  RegistrationForm: FormGroup

  constructor(private https: HttpService) {
    this.RegistrationForm = new FormGroup({
      designationName: new FormControl("", [Validators.required, Validators.minLength(5)]),
      roleName: new FormControl("", [Validators.required, Validators.minLength(5)]),
      departmentName: new FormControl("", [Validators.required, Validators.minLength(5)])
    })
  }

  ngOnInit(): void {
  }

  onAdd() {
    this.https.AddDesignation(this.RegistrationForm.value)
  }

}
