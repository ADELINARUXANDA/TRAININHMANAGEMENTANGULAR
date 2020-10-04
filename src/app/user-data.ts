import { CompileTypeMetadata } from '@angular/compiler';
import { UserNotificationData } from "./userNotification-data";

import {TypeData} from './type-data'
import {CourseData} from './course-data'
export class UserData{

 id: number;
     login: string;
     password : string;
     first_name: string;
     last_name: string;
    active_status: string;
     userNotification: UserNotificationData;
     type: TypeData;
    course: CourseData;
}