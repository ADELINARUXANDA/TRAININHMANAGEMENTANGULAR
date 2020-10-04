import { Component, OnInit } from '@angular/core';
import { ClassUnitData } from '../classUnit-data';
import{ClassService} from '../class.service';
import { ClassUnitService } from '../classUnit.service';

@Component({
  selector: 'app-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.css']
})
export class CalendarListComponent implements OnInit {
  classUnits : ClassUnitData[] = []
  constructor(private classUnitsService: ClassUnitService) { }

  ngOnInit(): void {
  }
  showCalendar(){
    this.classUnitsService.getClassesUnits().subscribe(receivedClasses =>
      {
         this.classUnits = receivedClasses;

      })
  }

}
