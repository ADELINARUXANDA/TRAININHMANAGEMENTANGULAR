import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarListComponent } from './calendar-list/calendar-list.component';
import { ClassAddComponent } from './class-add/class-add.component';
import { ClassEditComponent } from './class-edit/class-edit.component';
import { ClassUnitAddComponent } from './class-unit-add/class-unit-add.component';
import { ClassUnitsEditComponent } from './class-units-edit/class-units-edit.component';
import { ClassesListComponent } from './classes-list/classes-list.component';
import { ClassUnitLisComponent } from './classUnits-list/class-unit-lis.component';
import { CourssesAddComponent } from './coursses-add/coursses-add.component';
import { CourssesEditComponent } from './coursses-edit/coursses-edit.component';
import { CourssesListComponent } from './coursses-list/coursses-list.component';
import { NotificationsListComponent } from './notifications-list/notifications-list.component';


const routes: Routes = [
  {path: '' , component : CourssesListComponent },
  {path: 'coursses-add', component: CourssesAddComponent},
  {path: 'coursses-edit/:id', component: CourssesEditComponent},
  {path: 'classUnits-list', component: ClassUnitLisComponent},
  {path: 'classUnit-add', component: ClassUnitAddComponent},
  {path: 'classUnits-edit', component: ClassUnitsEditComponent},
  {path: "classes-list", component: ClassesListComponent},
  {path: "class-add", component: ClassAddComponent},
  {path: "class-edit", component: ClassEditComponent},
  {path: "notifications-list", component: NotificationsListComponent},
  {path: "calendar-list", component:CalendarListComponent}
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
