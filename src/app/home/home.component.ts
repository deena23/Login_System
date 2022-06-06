import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '../core/api-service.service';
import { adminlogin } from '../core/Modal/adminlogin';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public apiservice: ApiServiceService, private router: Router) { }
  username:any ='';
  password:any = '';
  role:any = '';
  adminmodel: adminlogin[] = [];
  ngOnInit(): void {
  }
  formcheck(loginform:NgForm)
  {
    console.log(this.username, this.password, this.role);
    localStorage.setItem("username", this.username);
    if(this.role == 'admin')
    this.apiservice.getadminlogin(this.username, this.password).subscribe(data=>{
      console.log(data);
      this.adminmodel = data as adminlogin[];
      if(this.adminmodel != null)
      {
        console.log('success');
        this.router.navigate(['/admin']);
      }
      else
      {
        alert('Wrong username and password...try again');
        this.username = '';
        this.password = '';
        loginform.reset();
      }
    })
  }
}
