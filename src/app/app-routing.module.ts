import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import{CourssesListComponent} from './coursses-list/coursses-list.component';
import{CourseAddComponent} from'./course-add/course-add.component';
import{CourseEditComponent} from './course-edit/course-edit.component';
import{ClassUnitsListComponent} from './classUnits-list/classUnits-list.component';
import{ClassUnitAddComponent} from './classUnit-add/classUnit-add.component';
import{ClassUnitEditComponent} from './classUnit-edit/classUnit-edit.component';
import {ClassesListComponent} from './classes-list/classes-list.component';
import{ClassAddComponent} from './class-add/class-add.component';
import{ClassEditComponent} from './class-edit/class-edit.component';
import{NotificationsListComponent} from './notifications-list/notifications-list.component';
import{CalendarListComponent} from './calendar-list/calendar-list.component';
import{HttpClientModule} from '@angular/common/http';
import { AssignClassUnitComponent } from './assignClassUnit/assignClassUnit.component';




const routes: Routes = [
  {path: '' , component : CourssesListComponent },
  {path: 'course-add', component: CourseAddComponent},
  {path: 'course-edit/:id', component: CourseEditComponent},
  {path: 'classUnits-list', component: ClassUnitsListComponent},
  {path: 'classUnit-add', component: ClassUnitAddComponent},
  {path: 'classUnit-edit/:id', component: ClassUnitEditComponent},
  {path: "classes-list", component: ClassesListComponent},
  {path: "class-add", component: ClassAddComponent},
  {path: "class-edit/:id", component: ClassEditComponent},
  {path: "notifications-list", component: NotificationsListComponent},
  {path: "calendar-list", component:CalendarListComponent},
  {path: "assignClassUnit", component:AssignClassUnitComponent}
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
