import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workinghour',
  templateUrl: './workinghour.component.html',
  styleUrls: ['./workinghour.component.css']
})
export class WorkinghourComponent implements OnInit {

  recordlst:
    {
      whid: number,
      internId: string,
      monthly: string,
      companyWorkingHour: string,
      internWorkingHour: string,
    }[] = [];

  constructor(private http: HttpClient, private route: Router) { }

  getData() {
    let response = this.http.get("https://localhost:44316/api/WorkingHour")
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
    this.route.navigate(['addworkinghour'])
  }

  OnDelete(id: number) {
    let response = this.http.delete(`https://localhost:44316/api/WorkingHour/${id}`)
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
    this.route.navigate(['editworkinghour', r])
  }

}
