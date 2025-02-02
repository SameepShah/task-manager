import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './admin/about/about.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProjectsComponent } from './admin/projects/projects.component';

const routes: Routes = [
  { path:"dashboard", component:DashboardComponent},
  { path:"about", component:AboutComponent},
  { path: "projects", component:ProjectsComponent},
  { path: "", component:DashboardComponent, pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
