import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth.guard";
import { ProfileResolver } from "./services/profile.resolver";
import { CourseDetailsComponent } from "./components/course-details/course-details.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LearnerComponent } from "./components/learner/learner.component";


const routes: Routes = [
    {
        path: '', component: LearnerComponent, canActivate: [AuthGuard], children: [
            { path: '', redirectTo: 'dashboard',  pathMatch: 'full'},
            {
                path: 'dashboard', component: DashboardComponent, resolve: { profile: ProfileResolver },
            },
            {
                path: 'course', component: CourseDetailsComponent
            }
        ]
    }
]


@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class GeeksRoutes { }