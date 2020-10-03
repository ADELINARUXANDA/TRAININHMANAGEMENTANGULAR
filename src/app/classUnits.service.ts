import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ClassUnitsData} from './classUnits-data';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassUnitsService {

  constructor(private httpClient: HttpClient) { }

  public getClassesUnits():Observable<ClassUnitsData[]>{
    return this.httpClient.get<ClassUnitsData[]>('http://localhost:8080/findClassesUnits');
    
    }

    public addClassUnit(classUnitData: ClassUnitsData): Observable<any>{
      return this.httpClient.post<any>('http://localhost:8080/addClassUnit', classUnitData);
    }

    public getClassUnit(id: number): Observable<ClassUnitsData>{
      return this.httpClient.get<ClassUnitsData>('http://localhost:8080/getClassUnit/'+ id);
    }
    public editClassUnit(classUnitData: ClassUnitsData): Observable<any>{
      return this.httpClient.put<any>('http://localhost:8080/addClassUnit', classUnitData);
    }
    public deleteClassUnit(id: number) : Observable<any>{
      return this.httpClient.delete<any>('http://localhost:8080/deleteClassUnit/'+ id);
    }

}
