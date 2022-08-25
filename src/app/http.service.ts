import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { designation, internLogin, internRegister } from 'src/models/model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private httpservices: HttpClient, private route: Router) { }

  login(payload: internLogin) {
    let response = this.httpservices.post("https://localhost:44316/api/InternRecord/login", payload, { responseType: 'text' });
    response.subscribe({
      next: nxt => {
        console.log(nxt)
        this.route.navigate(['record'])
      },
      error: err => {
        console.log(err)
      }
    })
  }

  Register(payload: internRegister) {
    let response = this.httpservices.post("https://localhost:44316/api/InternRecord", payload, { responseType: 'text' });
    response.subscribe({
      next: nxt => {
        console.log(nxt)
        alert("Registration Successfull")
        this.route.navigate(['login'])
      },
      error: err => {
        console.log(err.error)
        alert(err.error)
      }
    })
  }

  AddRecord(payload: internRegister) {
    let response = this.httpservices.post("https://localhost:44316/api/InternRecord", payload, { responseType: 'text' });
    response.subscribe({
      next: nxt => {
        console.log(nxt)
        alert("Added Successfully")
        this.route.navigate(['record'])
      },
      error: err => {
        console.log(err.error)
        alert(err.error)
      }
    })
  }

  EditRecord(payload: internRegister) {
    let response = this.httpservices.put("https://localhost:44316/api/InternRecord", payload, { responseType: 'text' });
    response.subscribe({
      next: nxt => {
        console.log(nxt)
        alert("Edited Successfully")
        this.route.navigate(['record'])
      },
      error: err => {
        console.log(err.error)
        alert(err.error)
      }
    })
  }

  AddDesignation(payload: designation) {
    let response = this.httpservices.post("https://localhost:44316/api/Designation", payload, { responseType: 'text' });
    response.subscribe({
      next: nxt => {
        console.log(nxt)
        alert("Added Successfully")
        this.route.navigate(['designation'])
      },
      error: err => {
        console.log(err.error)
        alert(err.error)
      }
    })
  }

  EditDesignation(payload: designation) {
    let response = this.httpservices.put("https://localhost:44316/api/Designation", payload, { responseType: 'text' });
    response.subscribe({
      next: nxt => {
        console.log(nxt)
        alert("Edited Successfully")
        this.route.navigate(['designation'])
      },
      error: err => {
        console.log(err.error)
        alert(err.error)
      }
    })
  }
}

