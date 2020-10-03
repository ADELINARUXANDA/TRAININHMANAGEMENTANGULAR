import { Component, OnInit } from '@angular/core';
import { ClassUnitsData } from '../classUnits-data';
import{ClassService} from '../class.service';
import { ClassUnitsService } from '../classUnits.service';

@Component({
  selector: 'app-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.css']
})
export class CalendarListComponent implements OnInit {
  classUnits : ClassUnitsData[] = []
  constructor(private classUnitsService: ClassUnitsService) { }

  ngOnInit(): void {
  }
  showCalendar(){
    this.classUnitsService.getClassesUnits().subscribe(receivedClasses =>
      {
         this.classUnits = receivedClasses;

      })
  }

}
