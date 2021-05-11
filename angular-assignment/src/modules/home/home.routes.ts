import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UnAuthGuard } from "./un-auth.guard";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { SignupPageComponent } from "./components/signup-page/signup-page.component";

const routes: Routes = [
  {
    path: '', component: HomePageComponent, canActivate: [UnAuthGuard]
  },
  {
    path: 'login', component: LoginPageComponent, canActivate: [UnAuthGuard]
  }
  ,
  {
    path: 'signup', component: SignupPageComponent, canActivate: [UnAuthGuard]
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
export class HomeRoutes { }