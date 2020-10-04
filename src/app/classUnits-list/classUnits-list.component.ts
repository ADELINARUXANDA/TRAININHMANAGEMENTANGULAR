import { Component, OnInit } from '@angular/core';
import {ClassUnitData} from '../classUnit-data';
import {ClassUnitService} from '../classUnit.service';
import {ClassService} from '../class.service';
import { ClassData } from '../class-data';

@Component({
  selector: 'app-classUnits-list',
  templateUrl: './classUnits-list.component.html',
  styleUrls: ['./classUnits-list.component.css']
})
export class ClassUnitsListComponent implements OnInit {
classUnits: ClassUnitData[] =[];

  constructor(private classUnitService: ClassUnitService) { }

  ngOnInit(): void {
    this.classUnitService.getClassesUnits().subscribe(receivedProducts => {
      this.classUnits = receivedProducts;

    });
  }
 delete(id: number){
   this.classUnitService.deleteClassUnit(id).subscribe(message => {
     this.ngOnInit();
    console.log(message);
   });
   
 }


 

}
