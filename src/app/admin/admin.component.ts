import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }
  username: any;
  project: any;
  ngOnInit(): void {
    this.username = localStorage.getItem("username");
  }

}
