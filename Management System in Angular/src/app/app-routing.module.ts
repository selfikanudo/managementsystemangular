import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewairportComponent } from './viewairport/viewairport.component';
import { AddairportComponent } from './addairport/addairport.component';

const routes: Routes = [
  { path: 'add', component: AddairportComponent },
  { path: 'view', component: ViewairportComponent },
  //{ path: '**',redirectTo:'/view',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ViewairportComponent, AddairportComponent]
