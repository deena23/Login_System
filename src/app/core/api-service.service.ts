import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  baseURL = "http://localhost:50404/api/login";
  constructor(private http: HttpClient) { }
  getadminlogin(id:string, name:string)
  {
    return this.http.get(this.baseURL+'/getadminlogin/'+id+'/'+name);
  }
}
