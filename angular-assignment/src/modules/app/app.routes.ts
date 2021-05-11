import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";



const appRoutes: Routes = [
    {
      path: '', loadChildren: () => import('./../geeks/geeks.module').then(m => m.GeeksModule)
    },
    {
      path: 'home', loadChildren: () => import('./../home/home.module').then(m => m.HomeModule)
    },
    {
      path: '**', redirectTo: '', pathMatch: 'full'
    }
  ];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes), FormsModule, CommonModule],
    exports: [RouterModule]
})
export class AppRoutes{

}