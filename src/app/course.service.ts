import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CourseData} from './course-data';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private httpClient: HttpClient) { }

  
  public getCoursses():Observable<CourseData[]>{
    return this.httpClient.get<CourseData[]>('http://localhost:8080/findCourses');

}
public addCourse(courseData: CourseData): Observable<any>{
  return this.httpClient.post<any>('http://localhost:8080/addCourse', courseData);
}

public getCourse(id: number): Observable<CourseData>{
  return this.httpClient.get<CourseData>('http://localhost:8080/getCourse/'+ id);
}

public editCourse(courseData: CourseData):Observable<any>{
  return this.httpClient.put<any>('http://localhost:8080/editCourse', courseData);
}

public deleteCourse(id: number) : Observable<any>{
  return this.httpClient.delete<any>('http://localhost:8080/deleteCourse/'+ id);
}

}
