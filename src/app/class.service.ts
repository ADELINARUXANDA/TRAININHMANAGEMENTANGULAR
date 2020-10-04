import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ClassData} from './class-data';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private httpClient: HttpClient) { }

  public getClasses():Observable<ClassData[]>{
    return this.httpClient.get<ClassData[]>('http://localhost:8080/findClasses')
    
    }
    public addClass(classData: ClassData): Observable<any>{
      return this.httpClient.post<any>('http://localhost:8080/addClass', classData);
    }
    public getClass(id: number): Observable<ClassData>{
      return this.httpClient.get<ClassData>('http://localhost:8080/findClassById/'+ id);
    }
    public editClass(classData: ClassData):Observable<any>{
      return this.httpClient.put<any>('http://localhost:8080/editClass', classData);
    }
    public deleteClass(id: number) : Observable<any>{
      return this.httpClient.delete<any>('http://localhost:8080/deleteClass/'+ id);
    }

}
