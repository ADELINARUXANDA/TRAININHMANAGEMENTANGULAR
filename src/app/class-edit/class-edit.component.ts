import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassData } from '../class-data';
import{ClassService} from '../class.service';

@Component({
  selector: 'app-class-edit',
  templateUrl: './class-edit.component.html',
  styleUrls: ['./class-edit.component.css']
})
export class ClassEditComponent implements OnInit {
classData: ClassData = new ClassData();

  constructor(private activateRoutes: ActivatedRoute, private classService: ClassService, private route : Router) { }
  

  ngOnInit(): void {
    let id = this.activateRoutes.snapshot.paramMap.get("id");
    console.log("id:" + id);
    this.classService.getClass(Number(id)).subscribe(classResult => 
      {
        this.classData = classResult;
      })
  }

  editClass(): void {
    this.classService.editClass(this.classData).subscribe(result => {
      console.log(this.classData);
      this.route.navigateByUrl("classes-list");
    })

    
  }
}
