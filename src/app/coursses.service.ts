import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CourssesData} from './coursses-data';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourssesService {

  constructor(private httpClient: HttpClient) { }
  public getCoursses():Observable<CourssesData[]>{
    return this.httpClient.get<CourssesData[]>('http://localhost:8080/findCourses');

}
public addCourse(courssesData: CourssesData): Observable<any>{
  return this.httpClient.post<any>('http://localhost:8080/addCourse', courssesData);
}

public getCourse(id: number): Observable<CourssesData>{
  return this.httpClient.get<CourssesData>('http://localhost:8080/getCourse/'+ id);
}

public editCourse(CourssesData: CourssesData):Observable<any>{
  return this.httpClient.put<any>('http://localhost:8080/editCourse', CourssesData);
}

public deleteCourse(id: number) : Observable<any>{
  return this.httpClient.delete<any>('http://localhost:8080/deleteCourse/'+ id);
}

}
