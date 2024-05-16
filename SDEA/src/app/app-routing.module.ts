import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './estudiantes/inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { CuestionarioComponent } from './estudiantes/cuestionario/cuestionario.component';
import { ResultadosComponent } from './estudiantes/resultados/resultados.component';

const appRoutes : Routes = [

  { path:'', component : LoginComponent },
  { path:'Inicio', component : InicioComponent },
  { path:'Cuestionario/:id_cuestionario', component : CuestionarioComponent },
  { path:'Resultado', component : ResultadosComponent }

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
