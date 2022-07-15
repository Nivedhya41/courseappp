import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) {}
  
    ServiceService=()=>
    {
      return this.http.get("https://mylinkurcodesapp.herokuapp.com/getcourses");
    }
    Addcourse=(course:any)=>
    {
      return this.http.post<any>("https://mylinkurcodesapp.herokuapp.com/addcourse",course);
    }
}
