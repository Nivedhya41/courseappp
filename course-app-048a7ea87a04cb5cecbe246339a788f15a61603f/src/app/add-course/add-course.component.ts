import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  course={courseTitle:"",
  courseDescription:"",
  courseDate:"",
  courseVenue:"",
  courseDuration:""
}

  constructor(private courseservice:ServiceService) { }

  ngOnInit(): void {
  }
  Addcourse(){
    this.courseservice.Addcourse(this.course)
    .subscribe((data)=>{
  
    
    
  })
  alert("Success");
}
}
