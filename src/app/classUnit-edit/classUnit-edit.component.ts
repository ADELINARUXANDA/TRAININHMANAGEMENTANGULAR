import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassUnitData } from '../classUnit-data';
import { ClassUnitService } from '../classUnit.service';

@Component({
  selector: 'app-classUnit-edit',
  templateUrl: './classUnit-edit.component.html',
  styleUrls: ['./classUnit-edit.component.css']
})
export class ClassUnitEditComponent implements OnInit {

classUnitData: ClassUnitData = new ClassUnitData();

  constructor( private activateRoutes: ActivatedRoute, private classUnitService: ClassUnitService, private route : Router) { }
  
  ngOnInit(): void {
    let id =this.activateRoutes.snapshot.paramMap.get("id");
    console.log("id:" + id);
    this.classUnitService.getClassUnit(Number(id)).subscribe(classUnitResult =>
      {
        this.classUnitData = classUnitResult;
      })
  }

  editClassUnit(): void{
    this.classUnitService.editClassUnit(this.classUnitData).subscribe(result =>
      {

   console.log(this.classUnitData);
   this.route.navigateByUrl("classUnits-list");
  });
}
}
