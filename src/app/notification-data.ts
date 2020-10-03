import {UserData} from './user-data'
import {ClassData} from './class-data'
import { UserNotificationData } from './userNotification-data';


export class NotificationData{

     id: number;
    User: UserData;
    classes: ClassData[];
    notificationsList: UserNotificationData[] ;
     subject:string;
    contents:string;
}