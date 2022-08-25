import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {

  recordlst: any = [];

  constructor(private http: HttpClient, private route: Router) { }

  getData() {
    let response = this.http.get("https://localhost:44316/api/Designation")
    response.subscribe({
      next: nxt => {
        this.recordlst = nxt;
      }
    })
  }

  ngOnInit(): void {
    this.getData()
  }
  OnAdd() {
    this.route.navigate(['adddesignation'])
  }

  OnDelete(id: number) {
    let response = this.http.delete(`https://localhost:44316/api/Designation/${id}`)
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
  OnEdit(r: string) {
    console.log(r)
    this.route.navigate(['editdesignation', r])
  }

}
