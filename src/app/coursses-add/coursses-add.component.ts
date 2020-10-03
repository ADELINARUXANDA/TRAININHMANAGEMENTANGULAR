import { Component, OnInit } from '@angular/core';
import { CourssesData } from '../coursses-data';
import { CourssesService } from '../coursses.service';

@Component({
  selector: 'app-coursses-add',
  templateUrl: './coursses-add.component.html',
  styleUrls: ['./coursses-add.component.css']
})
export class CourssesAddComponent implements OnInit {
  public courssesData: CourssesData = new CourssesData;

  constructor(private courssesService: CourssesService) { }

  ngOnInit(): void {
  }
public addCourss(): void {
this.courssesService.addCourse(this.courssesData).subscribe(result => 
  {
  console.log("Course added");
});
}
}