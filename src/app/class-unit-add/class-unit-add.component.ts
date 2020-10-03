import { Component, OnInit } from '@angular/core';
import { ClassUnitsData } from '../classUnits-data';
import { ClassUnitsService } from '../classUnits.service';

@Component({
  selector: 'app-class-unit-add',
  templateUrl: './class-unit-add.component.html',
  styleUrls: ['./class-unit-add.component.css']
})
export class ClassUnitAddComponent implements OnInit {
public classUnitData: ClassUnitsData = new ClassUnitsData();
  constructor(private classUnitsService: ClassUnitsService) { }

  ngOnInit(): void {
  }

  public addClassUnit(): void{
    this.classUnitsService.addClassUnit(this.classUnitData).subscribe(results =>
      {
    console.log("classUnit added");
  });
}}
