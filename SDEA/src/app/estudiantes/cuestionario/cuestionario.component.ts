import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoService } from 'src/app/services/alumno.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css'],
})
export class CuestionarioComponent implements OnInit {

  Cuestionario!: Array<any>;
  num_pregunta: number = 1;
  respuestas_compactadas : string = "";

  constructor(private servicio: AlumnoService, private route: ActivatedRoute, private routing: Router ) { 
  }

  ngOnInit(): void {
    this.obtenerPreguntas();
  }

  obtenerPreguntas() {

    this.servicio.obtenerPreguntas( 
      this.route.snapshot.params['id_cuestionario'] 
    ).subscribe( (data) => {
      this.Cuestionario = data;
    } )

  }

  registrarRespuestas() {

    for (let index = 1; index <= 44; index++) {
      
      const aux = document.querySelector( "[id='"+ index +"-A']" ) as HTMLInputElement
      if( aux.checked ){
        this.respuestas_compactadas += "A";
      }
      else {
        this.respuestas_compactadas += "B";
      }

    }

    this.servicio.resultadoEncuesta(
      {
        nro_cuenta: JSON.parse(localStorage.getItem('info_alumno') || "{}").nro_cuenta,
        respuestas_compactadas: this.respuestas_compactadas,
        grupo: JSON.parse(localStorage.getItem('info_alumno') || "{}").grupo
      }
    ).subscribe( data => {
      
      this.routing.navigate(['/Resultado']);

    }, (error) => {
      Swal.fire({
        title: 'Error de registro',
        html: 'Algo salio mal en el registro de las respuestas por favor intente mas tarde'+error,
        icon: 'error',
        customClass: {
          container: 'my-swal',
        },
      });
    } )
  }
}
