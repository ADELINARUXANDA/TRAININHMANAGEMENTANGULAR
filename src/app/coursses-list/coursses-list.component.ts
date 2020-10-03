import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import {CourssesData} from '../coursses-data';
import {CourssesService} from '../coursses.service';
import {ClassUnitsService} from '../classUnits.service';
import { ClassUnitsData } from '../classUnits-data';


@Component({
  selector: 'app-coursses-list',
  templateUrl: './coursses-list.component.html',
  styleUrls: ['./coursses-list.component.css']
})
export class CourssesListComponent implements OnInit {
coursses: CourssesData[] = []
classUnits: ClassUnitsData[] =[]

  constructor(private courssesService: CourssesService, private classUnitsService: ClassUnitsService) { }

  ngOnInit(): void {
    
      this.courssesService.getCoursses().subscribe(receivedCoursses => {
        this.coursses = receivedCoursses;
  
    })
  
  }

  
delete(id: number){
  this.courssesService.deleteCourse(id).subscribe(message => {
    this.ngOnInit();
  console.log(message);
})

}

showClassUnits(){
  this.classUnitsService.getClassesUnits().subscribe(receivedClassUnits =>
    {
      this.classUnits = receivedClassUnits;
    })
}
}