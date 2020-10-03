import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourssesData } from '../coursses-data';
import {CourssesService} from '../coursses.service';

@Component({
  selector: 'app-coursses-edit',
  templateUrl: './coursses-edit.component.html',
  styleUrls: ['./coursses-edit.component.css']
})
export class CourssesEditComponent implements OnInit {
courssesData: CourssesData = new CourssesData;
  constructor(private activateRoutes: ActivatedRoute, private courssesService: CourssesService,  private route : Router) {}
 

  ngOnInit(): void {
    let id = this.activateRoutes.snapshot.paramMap.get("id");
    console.log("Id:" + id);
    this.courssesService.getCourse(Number(id)).subscribe(courseResult=> 
{
  this.courssesData = courseResult;
}

      
      )
  }
editCourse(): void{
  this.courssesService.editCourse(this.courssesData).subscribe (result =>{
  console.log(this.courssesData);
  this.route.navigateByUrl("");
})
}
}