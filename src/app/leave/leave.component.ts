import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {

  recordlst: {
    leaveId: number,
    internId: string,
    leaveDate: string,
    reason: string,
  }[] = [];

  constructor(private http: HttpClient, private route: Router) { }

  getData() {
    let response = this.http.get("https://localhost:44316/api/Leave")
    response.subscribe({
      next: (nxt: any) => {
        this.recordlst = nxt;
      }
    })
  }

  ngOnInit(): void {
    this.getData()
  }
  OnAdd() {
    this.route.navigate(['addleave'])
  }

  OnDelete(id: number) {
    let response = this.http.delete(`https://localhost:44316/api/Leave/${id}`)
    response.subscribe({
      next: nxt => {
        console.log(nxt)
        this.getData()
      },
      error: err => {
        console.log(err)
      }
    })
  }
  OnEdit(r: number) {
    console.log(r)
    this.route.navigate(['editleave', r])
  }

}
