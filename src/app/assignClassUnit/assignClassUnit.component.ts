import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ClassUnitData} from '../classUnit-data';
import {ClassUnitService} from '../classUnit.service';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-assign-class-unit',
  templateUrl: './assign-class-unit.component.html',
  styleUrls: ['./assign-class-unit.component.css']
})
export class AssignClassUnitComponent implements OnInit {
  classUnits: ClassUnitData[] =[];
  idCourse : number;
  idClassUnit : number;

  classUnitData: ClassUnitData = new ClassUnitData();

  constructor( private activateRoutes: ActivatedRoute, private classUnitService: ClassUnitService, private route : Router, private courseService: CourseService) { }
  
  ngOnInit(): void {
    let id =this.activateRoutes.snapshot.paramMap.get("id");
    console.log("id:" + id);
    this.classUnitService.getClassUnit(Number(id)).subscribe(classUnitResult =>
      {
        this.classUnitData = classUnitResult;
      })
  }
  
  select(): void{
    this.courseService.asociationClassUnitACourse(((Number(this.idClassUnit))/(Number(this.idCourse))).subscribe(resultSelect=>
      console.log(this.classUnitData);
      this.route.navigateByUrl("classUnits-list")
      })

}
