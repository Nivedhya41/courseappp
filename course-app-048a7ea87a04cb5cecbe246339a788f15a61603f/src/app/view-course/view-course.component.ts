import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  constructor(private api:ServiceService) {
    api.ServiceService().subscribe(
      (Response)=>{
        this.data=Response
      }
    )
   }

  ngOnInit(): void {
  }
data:any=[
  
]
}
