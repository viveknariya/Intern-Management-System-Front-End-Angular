import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private http: HttpService) {
    this.loginForm = new FormGroup({
      userName: new FormControl(),
      Password: new FormControl(),
    })
  }

  ngOnInit(): void {
  }

  onLogIn() {
    this.http.login(this.loginForm.value);
  }

}
