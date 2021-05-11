import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { SignupPageComponent } from "./components/signup-page/signup-page.component";
import { HomeRoutes } from "./home.routes";

@NgModule({
    declarations: [
        HomePageComponent,
        LoginPageComponent,
        SignupPageComponent
    ],
    imports: [
        CommonModule, FormsModule, RouterModule, HomeRoutes, SharedModule
    ],
    exports: [
        HomePageComponent,
        LoginPageComponent,
        SignupPageComponent
    ]
}

)
export class HomeModule { }