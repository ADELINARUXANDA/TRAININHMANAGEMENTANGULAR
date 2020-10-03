import { Component, OnInit } from '@angular/core';
import {ClassData} from '../class-data';
import {ClassService} from '../class.service'

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.css']
})
export class ClassesListComponent implements OnInit {
classes: ClassData[]= []
  constructor(private classService: ClassService) { }

  ngOnInit(): void {
    this.classService.getClasses().subscribe(receivedClasses =>{
this.classes = receivedClasses;

    })
  }
delete(id: number){
  this.classService.deleteClass(id).subscribe(message => {
    this.ngOnInit();    
    console.log(message);
  })
}
}
