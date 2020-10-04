import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import{CourssesListComponent} from './coursses-list/coursses-list.component';
import{CourseAddComponent} from'./course-add/course-add.component';
import{CourseEditComponent} from './course-edit/course-edit.component';
import{ClassUnitsListComponent} from './classUnits-list/classUnits-list.component';
import{ClassUnitAddComponent} from './classUnit-add/classUnit-add.component';
import {ClassesListComponent} from './classes-list/classes-list.component';
import{ClassAddComponent} from './class-add/class-add.component';
import{ClassEditComponent} from './class-edit/class-edit.component';
import{NotificationsListComponent} from './notifications-list/notifications-list.component';
import{CalendarListComponent} from './calendar-list/calendar-list.component';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import{ClassUnitEditComponent} from './classUnit-edit/classUnit-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    CourssesListComponent,
    CourseAddComponent,
    CourseEditComponent,
    ClassUnitsListComponent,
    ClassUnitAddComponent,
    ClassUnitEditComponent,
    ClassesListComponent,
    ClassAddComponent,
    ClassEditComponent,
    NotificationsListComponent,
    CalendarListComponent
  ],
  imports: [
  
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
