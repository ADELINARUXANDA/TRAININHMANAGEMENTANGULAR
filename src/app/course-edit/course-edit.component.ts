import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseData } from '../course-data';
import {CourseService} from '../course.service';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

courseData: CourseData = new CourseData();

  constructor(private activateRoutes: ActivatedRoute, private courseService: CourseService ,private route : Router) {}
  

  ngOnInit(): void {
    let id = this.activateRoutes.snapshot.paramMap.get("id");
    console.log("Id:" + id);
    this.courseService.getCourse(Number(id)).subscribe(courseResult=> 
{
  this.courseData = courseResult;
})
  }
editCourse(): void{
  this.courseService.editCourse(this.courseData).subscribe (result =>{
  console.log(this.courseData);
  this.route.navigateByUrl("");
})
}
}



