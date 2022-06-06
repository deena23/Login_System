import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  taskcreate:boolean = false;
  taskassign:boolean = false;
  taskreview:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  createtask()
  {
    this.taskcreate = true;
    this.taskassign = false;
    this.taskreview = false;
  }
  assigntask()
  {
    this.taskcreate = false;
    this.taskassign = true;
    this.taskreview = false;
  }
  reviewtask()
  {
    this.taskcreate = false;
    this.taskassign = false;
    this.taskreview = true;
  }
}
