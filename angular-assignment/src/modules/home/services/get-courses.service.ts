import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GetCoursesService {

  private _url = "http://localhost:8000/allCourses";

  constructor(private http: HttpClient ) { }

  getCourses() {
    return this.http.get(this._url);
  }
}
