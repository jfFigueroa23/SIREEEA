import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'P_TomaDeciciones';
  loggedUser !: string;
  
  constructor(  private route: Router ) {}

  navigateInicio() {

    this.route.navigate(['/Inicio']);

  }

  loggedin() {
    return  localStorage.getItem('info_alumno');
  }

  logout() {

    localStorage.removeItem('info_alumno');
    this.route.navigate(['/']);

  }

}
