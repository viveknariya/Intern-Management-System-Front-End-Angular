import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { internRegister } from 'src/models/model';
import { EditRecordComponent } from './edit-record/edit-record.component';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  recordlst: {
    internId: string,
    internPassword: string,
    phoneNumber: string,
    internName: string,
    emailId: string,
    internAddress: string,
    internStatus: string,
    designation: string,
  }[] = [];

  constructor(private http: HttpClient, private route: Router) { }

  getData() {
    let response = this.http.get("https://localhost:44316/api/InternRecord")
    response.subscribe({
      next: (nxt: any) => {
        console.log(nxt)
        this.recordlst = nxt;
      }
    })
  }

  ngOnInit(): void {
    this.getData()
  }
  OnAdd() {
    this.route.navigate(['addrecord'])
  }

  OnDelete(id: string) {
    console.log(id)
    let response = this.http.delete(`https://localhost:44316/api/InternRecord/${id}`)
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
    this.route.navigate(['editrecord', r])
  }
}

