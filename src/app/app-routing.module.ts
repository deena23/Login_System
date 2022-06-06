import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ManagerComponent } from './manager/manager.component';
const routes: Routes = [
  { path : 'home' , component: HomeComponent},
  { path:'' , component: HomeComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'manager', component: ManagerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent =[HomeComponent]