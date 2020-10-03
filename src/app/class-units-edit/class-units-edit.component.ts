import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassUnitsData } from '../classUnits-data';
import { ClassUnitsService } from '../classUnits.service';

@Component({
  selector: 'app-class-units-edit',
  templateUrl: './class-units-edit.component.html',
  styleUrls: ['./class-units-edit.component.css']
})
export class ClassUnitsEditComponent implements OnInit {

classUnitsData: ClassUnitsData = new ClassUnitsData();

  constructor( private activateRoutes: ActivatedRoute, private clssUnitsService: ClassUnitsService, private route : Router) { }
  
  ngOnInit(): void {
    let id =this.activateRoutes.snapshot.paramMap.get("id");
    console.log("id:" + id);
    this.clssUnitsService.getClassUnit(Number(id)).subscribe(classUnitResult =>
      {
        this.classUnitsData = classUnitResult;
      })
  }

  editClassUnit(): void{
    this.clssUnitsService.editClassUnit(this.classUnitsData).subscribe(result =>
      {

   console.log(this.classUnitsData);
   this.route.navigateByUrl("");
  });
}
}
