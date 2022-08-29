import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private https: HttpService) {
    this.loginForm = new FormGroup({
      userName: new FormControl("", Validators.required),
      Password: new FormControl("", Validators.required),
    })
  }

  ngOnInit(): void {
    localStorage.setItem('login', '')
  }

  onLogIn() {
    this.https.login(this.loginForm.value);
  }

}
