import { UserData } from './user-data';
import {CourssesData} from './coursses-data'

export class ParticipantRegistrationData{
    id: number;
    data:Date;
    participant: UserData;
    course : CourssesData;
}