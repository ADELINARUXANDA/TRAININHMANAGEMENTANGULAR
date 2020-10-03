import { Component, OnInit } from '@angular/core';
import { ClassData } from '../class-data';
import { ClassService } from '../class.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-class-add',
  templateUrl: './class-add.component.html',
  styleUrls: ['./class-add.component.css']
})
export class ClassAddComponent implements OnInit {
public classData: ClassData = new ClassData();

  constructor(private classService: ClassService, private router: Router) { }

  ngOnInit(): void {
  }
public addClass(): void {
this.classService.addClass(this.classData).subscribe(result =>
  {
    console.log("Class added");
    this.router.navigateByUrl("");
  })
  
}
}
