import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourssesListComponent } from './coursses-list/coursses-list.component';
import {HttpClientModule} from '@angular/common/http';
import { CourssesAddComponent } from './coursses-add/coursses-add.component';
import { CourssesEditComponent } from './coursses-edit/coursses-edit.component';
import { ClassUnitLisComponent } from './classUnits-list/class-unit-lis.component';
import { ClassUnitAddComponent } from './class-unit-add/class-unit-add.component';
import { ClassUnitsEditComponent } from './class-units-edit/class-units-edit.component';
import { ClassesListComponent } from './classes-list/classes-list.component';
import { ClassAddComponent } from './class-add/class-add.component';
import { ClassEditComponent } from './class-edit/class-edit.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationsListComponent } from './notifications-list/notifications-list.component';
import { CalendarListComponent } from './calendar-list/calendar-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CourssesListComponent,
    CourssesAddComponent,
    CourssesEditComponent,
    ClassUnitLisComponent,
    ClassUnitAddComponent,
    ClassUnitsEditComponent,
    ClassesListComponent,
    ClassAddComponent,
    ClassEditComponent,
    NotificationsComponent,
    NotificationsListComponent,
    CalendarListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
