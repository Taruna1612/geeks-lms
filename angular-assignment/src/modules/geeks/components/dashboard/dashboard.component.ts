import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { GetCoursesService } from 'src/modules/home/services/get-courses.service';
import { GetUserCoursesService } from '../../services/get-user-courses';



@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public profile: any;
  public personCourses = [];
  public courses;
  public courseID;
  public show = true;

  constructor(private getCoursesService: GetCoursesService,private getUserCoursesService: GetUserCoursesService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    forkJoin(
      // as of RxJS 6.5+ we can use a dictionary of sources
      {
        allCourses: this.getCoursesService.getCourses(),
        courseID: this.getUserCoursesService.getPersonCourses()
      }
    ).subscribe(
      (data) => {
        console.log(data);
        for(let i in data.allCourses){
          for(let j in data.courseID){
            if(data.allCourses[i]._id === data.courseID[j].course_id){
              this.personCourses.push(data.allCourses[i]);
            }
          }
        }
        console.log(this.personCourses);
        this.courses = this.personCourses.filter(item => (item.type === "bookmarked"));
      }
    );

     this.profile = this.activatedRoute.snapshot.data['profile'][0];
     console.log(this.profile[0]._id);

    }

  loadBookmarkedCourses() {
    this.courses = this.personCourses.filter(item => (item.type === "bookmarked"));
    console.log(this.courses);
    this.show = true;
  }

  loadLearningCourses() {
    this.courses = this.personCourses.filter(item => (item.type === "learning"));
    console.log(this.courses);
    this.show = true;
  }

  loadPath() {
    this.show = false;
  }
}
