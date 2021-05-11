import { Component, OnInit } from '@angular/core';
import { GetCoursesService } from '../../services/get-courses.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  private Courses: any= [];
  //Getting popular courses from course list
  public popularCourses: any =[];
  //Getting trending courses from course list
  public trendingCourses: any =[];

  constructor(private _getCoursesService:  GetCoursesService ) { }

  ngOnInit(): void {
      this. _getCoursesService.getCourses()
      .subscribe(data => {
        console.log(data);
        this.Courses = data;
        this.popularCourses = this.Courses.filter(item => (item.type ==="popular"));
        console.log(this.popularCourses);
        this.trendingCourses = this.Courses.filter(item => (item.type ==="trending"));
        console.log(this.trendingCourses);
      });
  }
}