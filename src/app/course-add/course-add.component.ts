import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseData } from '../course-data';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {
  public courseData: CourseData = new CourseData;

  constructor(private courssesService: CourseService, private router : Router) { }

  ngOnInit(): void {
  }
public addCourse(): void {
this.courssesService.addCourse(this.courseData).subscribe(result => 
  {
  console.log("Course added");
  this.router.navigateByUrl("coursses-list");

});
}
}