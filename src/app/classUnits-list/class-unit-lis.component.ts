import { Component, OnInit } from '@angular/core';
import {ClassUnitsData} from '../classUnits-data';
import {ClassUnitsService} from '../classUnits.service';
import {ClassService} from '../class.service';
import { ClassData } from '../class-data';

@Component({
  selector: 'app-class-unit-lis',
  templateUrl: './class-unit-lis.component.html',
  styleUrls: ['./class-unit-lis.component.css']
})
export class ClassUnitLisComponent implements OnInit {
classUnits: ClassUnitsData[] =[]
classes : ClassData[] = []
  constructor(private classUnitsService: ClassUnitsService, private classService: ClassService) { }

  ngOnInit(): void {
    this.classUnitsService.getClassesUnits().subscribe(receivedProducts => {
      this.classUnits = receivedProducts;

    });
  }
 delete(id: number){
   this.classUnitsService.deleteClassUnit(id).subscribe(message => {
     this.ngOnInit();
    console.log(message);
   });
   
 }


 showClasses(){
  this.classService.getClasses().subscribe(receivedClasses =>
    {
      this.classes = receivedClasses;
    })
}
}
