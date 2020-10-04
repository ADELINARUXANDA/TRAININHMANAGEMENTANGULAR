import { Component, OnInit } from '@angular/core';
import { ClassUnitData } from '../classUnit-data';
import { ClassUnitService } from '../classUnit.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-classUnit-add',
  templateUrl: './classUnit-add.component.html',
  styleUrls: ['./classUnit-add.component.css']
})
export class ClassUnitAddComponent implements OnInit {
public classUnitData: ClassUnitData = new ClassUnitData();
  constructor(private classUnitsService: ClassUnitService, private router : Router) { }

  ngOnInit(): void {
  }

  public addClassUnit(): void{
    this.classUnitsService.addClassUnit(this.classUnitData).subscribe(results =>
      {
    console.log("classUnit added");
    this.router.navigateByUrl("classUnits-list");
  });
}}
