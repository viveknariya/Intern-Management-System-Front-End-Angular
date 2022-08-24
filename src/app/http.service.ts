import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { internLogin } from 'src/models/intern';

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
      },
      error: err => {
        console.log(err)
      }
    })
  }
}
