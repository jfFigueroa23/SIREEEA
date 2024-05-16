import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  nombreProfesor: string;

  constructor(private authService: AuthService) {
    const usuario = this.authService.obtenerUsuario();
    this.nombreProfesor = usuario.nombre_profesor;
  }

  ngOnInit(): void {
    const usuario = this.authService.obtenerUsuario();
    if (usuario && usuario.nombre_profesor) {
      this.nombreProfesor = usuario.nombre_profesor;
    }
  }

  cerrarSesion(): void {
    this.authService.cerrarSesion();
    // redirigir a la pagina de inicio de sesion y elimina model!
  }
}