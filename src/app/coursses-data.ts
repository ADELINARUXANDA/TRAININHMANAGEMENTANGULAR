import { ClassUnitsData } from './classUnits-data';
import {ParticipantRegistrationData} from './participantRegistration-data';

export class CourssesData{
    id: number;
    name:string;
    classUnits: ClassUnitsData[];
    participantRegistration: ParticipantRegistrationData;
}