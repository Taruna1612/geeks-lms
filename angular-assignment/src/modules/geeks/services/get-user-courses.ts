import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GetUserCoursesService {

  private _url = "http://localhost:8000/userCourses";
  constructor(private http: HttpClient) { }

  public courses;

  getPersonCourses() {
    return this.http.get(this._url);
  }
}