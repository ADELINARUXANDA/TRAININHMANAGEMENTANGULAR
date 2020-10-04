import { UserData } from './user-data';
import {CourseData} from './course-data'

export class ParticipantRegistrationData{
    id: number;
    data:Date;
    participant: UserData;
    course : CourseData;
}