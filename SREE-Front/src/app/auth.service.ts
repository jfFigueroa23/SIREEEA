import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuario: any; // Variable para almacenar los datos del usuario
  
  constructor() {
    // Suscribirse al evento popstate para detectar la navegación hacia atrás
    window.addEventListener('popstate', () => {
      location.reload(); // Forzar la recarga de la página desde el servidor
    });
  }

  guardarUsuario(usuario: any): void {
    this.usuario = usuario;
    localStorage.setItem('usuario', JSON.stringify(usuario)); // Almacenar en LocalStorage
  }

  obtenerUsuario(): any {
    if (!this.usuario) {
      this.usuario = JSON.parse(localStorage.getItem('usuario') || '{}'); // Obtener de LocalStorage
    }
    return this.usuario;
  }

  cerrarSesion(): void {
    this.usuario = null;
    localStorage.removeItem('usuario'); // Eliminar de LocalStorage
  }
}
