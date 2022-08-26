import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { designation, internLogin, internRegister, leave, workingHour } from 'src/models/model';

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

  AddDesignation(payload: any) {
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

  EditDesignation(payload: any) {
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
  AddLeave(payload: any) {
    let response = this.httpservices.post("https://localhost:44316/api/Leave", payload, { responseType: 'text' });
    response.subscribe({
      next: nxt => {
        console.log(nxt)
        alert("Added Successfully")
        this.route.navigate(['leave'])
      },
      error: err => {
        console.log(err.error)
        alert(err.error)
      }
    })
  }
  EditLeave(payload: any) {
    let response = this.httpservices.put("https://localhost:44316/api/Leave", payload, { responseType: 'text' });
    response.subscribe({
      next: nxt => {
        console.log(nxt)
        alert("Edited Successfully")
        this.route.navigate(['leave'])
      },
      error: err => {
        console.log(err.error)
        alert(err.error)
      }
    })
  }

  AddWorkingHour(payload: any) {
    let response = this.httpservices.post("https://localhost:44316/api/WorkingHour", payload, { responseType: 'text' });
    response.subscribe({
      next: nxt => {
        console.log(nxt)
        alert("Added Successfully")
        this.route.navigate(['workinghour'])
      },
      error: err => {
        console.log(err.error)
        alert(err.error)
      }
    })
  }
  EditWorkingHour(payload: any) {
    let response = this.httpservices.put("https://localhost:44316/api/WorkingHour", payload, { responseType: 'text' });
    response.subscribe({
      next: nxt => {
        console.log(nxt)
        alert("Edited Successfully")
        this.route.navigate(['workinghour'])
      },
      error: err => {
        console.log(err.error)
        alert(err.error)
      }
    })
  }
}

