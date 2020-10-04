import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import {CourseData} from '../course-data';
import {CourseService} from '../course.service';
import {ClassUnitService} from '../classUnit.service';
import { ClassUnitData } from '../classUnit-data';


@Component({
  selector: 'app-coursses-list',
  templateUrl: './coursses-list.component.html',
  styleUrls: ['./coursses-list.component.css']
})
export class CourssesListComponent implements OnInit {
coursses: CourseData[] = [];


  constructor(private courssesService: CourseService) { }

  ngOnInit(): void {
    
      this.courssesService.getCoursses().subscribe(receivedCoursses => {
        this.coursses = receivedCoursses;
  
    })
  
  }

  
delete(id: number){
  this.courssesService.deleteCourse(id).subscribe(message => {
    this.ngOnInit();
  console.log(message);
})

}

}