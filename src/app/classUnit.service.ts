import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ClassUnitData} from './classUnit-data';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassUnitService {

  constructor(private httpClient: HttpClient) { }

  public getClassesUnits():Observable<ClassUnitData[]>{
    return this.httpClient.get<ClassUnitData[]>('http://localhost:8080/findClassesUnits');
    
    }

    public addClassUnit(classUnitData: ClassUnitData): Observable<any>{
      return this.httpClient.post<any>('http://localhost:8080/addClassUnit', classUnitData);
    }

    public getClassUnit(id: number): Observable<ClassUnitData>{
      return this.httpClient.get<ClassUnitData>('http://localhost:8080/getClassUnit/'+ id);
    }
    public editClassUnit(classUnitData: ClassUnitData): Observable<any>{
      return this.httpClient.put<any>('http://localhost:8080/addClassUnit', classUnitData);
    }
    public deleteClassUnit(id: number) : Observable<any>{
      return this.httpClient.delete<any>('http://localhost:8080/deleteClassUnit/'+ id);
    }

}
