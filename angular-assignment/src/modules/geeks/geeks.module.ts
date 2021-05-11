import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { CourseDetailsComponent } from "./components/course-details/course-details.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LearnerComponent } from "./components/learner/learner.component";
import { GeeksRoutes } from "./geeks.routes";

@NgModule({
    declarations:[
       DashboardComponent,
       CourseDetailsComponent,
       LearnerComponent
    ],
    imports:[
         CommonModule, FormsModule, RouterModule, GeeksRoutes, SharedModule
    ],
    exports:[
           DashboardComponent,
           CourseDetailsComponent,
           LearnerComponent

    ]
}
   
)
export class GeeksModule{}