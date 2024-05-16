import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { PrincipalComponent } from './principal/principal.component';


const appRoutes : Routes = [

  { path:'', component : LoginComponent},
  { path:'profesores', component: ProfesoresComponent},
  { path:'principal', component: PrincipalComponent},
 
]

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }