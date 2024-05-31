import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Lista, chartValues } from './lista.model';
import { Chart } from 'chart.js';
import { AlumnoService } from 'src/app/services/alumno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit, AfterViewInit {
  Listas: Lista[] = [];
  estadoEncuestas!: Array<any>;
  Description: string;

  public chart: any;

  activo: number = 0;
  reflexivo: number = 0;
  sensorial: number = 0;
  intuitivo: number = 0;
  visual: number = 0;
  verbal: number = 0;
  secuencial: number = 0;
  global: number = 0;

  constructor( private servicio: AlumnoService, private route: Router ) {
    this.Description = 'Select a survey to see the description';
  }

  OnClick(Des: any){
    this.Description = Des;
  }


  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'radar',
      data: {
        labels: ['Active', 'Sensory', 'Visual', 'Sequential', 'Thoughtful', 'Intuitive', 'Verbal', 'Global'],
        datasets: [
          {
            label: 'Your profile',
            data: [],
            backgroundColor: 'rgba(46, 155, 236, 0.5)',
            borderColor: 'rgba(30, 36, 64, 0.6)',
            borderWidth: 1,
            pointBackgroundColor: '#2E9BEC'
          }
        ]
      },
      options: {
        responsive: true,
        aspectRatio:1.6,
        scales: {
            r: {
                angleLines: {
                    display: false
                },
                suggestedMin: 0,
                suggestedMax: 10
            }
        }
      }
    });
  }

  ngOnInit(): void {
    this.createChart();
    this.estadoEncuesta();
    this.obtenerEncuestas();
  }

  ngAfterViewInit() {
    this.obtenerPerfilAlumno();
  }

  obtenerEncuestas() {
    const num_grupo = JSON.parse(localStorage.getItem('info_alumno') || "{}").grupo;
    this.servicio.obtenerEncuestaAsignada(num_grupo).subscribe((data) => {
      const listaModel = new Lista();
      console.log(data)
      listaModel.nombreProfesor = data.cuestionario.id_profesor;
      listaModel.titulo = data.cuestionario.nombre;
      listaModel.descripcion = data.cuestionario.descripcion;
      listaModel.id_cuestionario = data.cuestionario.id_cuestionario;
      this.Listas.push(listaModel);
    });
  }

  obtenerPerfilAlumno() {
    const chartVal = new chartValues();
    this.servicio.obtenerPerfil( 
      JSON.parse(localStorage.getItem('info_alumno') || "{}").nro_cuenta).subscribe((data) => {
      var element = document.getElementById('a1');
      // Bloque 1
      const valorActivoReflexivo = data[0].activo_reflexivo.slice(0, -1);
      const letraActivoReflexivo = data[0].activo_reflexivo.slice(-1);
      console.log(valorActivoReflexivo,letraActivoReflexivo)
      if (letraActivoReflexivo === 'A') {
        this.activo = valorActivoReflexivo;
        document.getElementById('a' + this.activo)!.innerHTML = "x";
        chartVal.activo = 5 + (this.activo / 22)*10;
        chartVal.reflexivo = 5 - (this.activo / 22)*10;
      } else if (letraActivoReflexivo === 'B')  {
        this.reflexivo = valorActivoReflexivo;
        document.getElementById('r' + this.reflexivo)!.innerHTML = "x";
        chartVal.activo = 5 - (this.reflexivo / 22)*10;
        chartVal.reflexivo = 5 + (this.reflexivo / 22)*10;
      }console.log("valores activo: ",this.activo,"val ref: ",this.reflexivo);


      // Bloque 2
      const valorSensorialIntuitivo = data[0].sensorial_intuitivo.slice(0, -1);
      const letraSensorialIntuitivo = data[0].sensorial_intuitivo.slice(-1);
      console.log(valorSensorialIntuitivo,letraSensorialIntuitivo)
      if (letraSensorialIntuitivo === 'A') {
        this.sensorial = valorSensorialIntuitivo;
        document.getElementById('s' + this.sensorial)!.innerHTML = "x";
        chartVal.sensorial = 5 + (this.sensorial / 22)*10;
        chartVal.intuitivo = 5 - (this.sensorial / 22)*10;
      } else if (letraSensorialIntuitivo === 'B'){
        this.intuitivo = valorSensorialIntuitivo;
        document.getElementById('i' + this.intuitivo)!.innerHTML = "x";
        chartVal.sensorial = 5 - (this.intuitivo / 22)*10;
        chartVal.intuitivo = 5 + (this.intuitivo / 22)*10;
      }console.log("valores sens: ",this.sensorial,"val intuitivo: ",this.intuitivo)

      // Bloque 3
      const valorVisualVerbal = data[0].visual_verbal.slice(0, -1);
      const letraVisualVerbal = data[0].visual_verbal.slice(-1);
      console.log(valorVisualVerbal,letraVisualVerbal)
      if (letraVisualVerbal === 'A') {
        this.visual = valorVisualVerbal;
        document.getElementById('v' + this.visual)!.innerHTML = "x";
        chartVal.visual = 5 + (this.visual / 22)*10;
        chartVal.verbal = 5 - (this.visual / 22)*10;
      } else if (letraVisualVerbal === 'B'){
        this.verbal = valorVisualVerbal;
        document.getElementById('ve' + this.verbal)!.innerHTML = "x";
        chartVal.visual = 5 - (this.verbal / 22)*10;
        chartVal.verbal = 5 + (this.verbal / 22)*10;
      }console.log("valores visual: ",this.visual,"val verbal: ",this.verbal)

      // Bloque 4
      const valorSecuencialGlobal = data[0].secuencial_global.slice(0, -1);
      const letraSecuencialGlobal = data[0].secuencial_global.slice(-1);
      console.log(valorSecuencialGlobal,letraSecuencialGlobal)
      if (letraSecuencialGlobal === 'A') {
        this.secuencial = valorSecuencialGlobal;
        document.getElementById('se' + this.secuencial)!.innerHTML = "x";
        chartVal.secuencial = 5 + (this.secuencial / 22)*10;
        chartVal.global = 5 - (this.secuencial / 22)*10;
      } else if (letraSecuencialGlobal === 'B'){
        this.global = valorSecuencialGlobal;
        document.getElementById('g' + this.global)!.innerHTML = "x";
        chartVal.secuencial = 5 - (this.global / 22)*10;
        chartVal.global = 5 + (this.global / 22)*10;
      }console.log("valores secuencial: ",this.secuencial,"val global: ",this.global)

      this.chart.data.datasets.forEach((dataset:any) => {
        dataset.data.push(chartVal.activo);
        dataset.data.push(chartVal.sensorial);
        dataset.data.push(chartVal.visual);
        dataset.data.push(chartVal.secuencial);
        dataset.data.push(chartVal.reflexivo);
        dataset.data.push(chartVal.intuitivo);
        dataset.data.push(chartVal.verbal);
        dataset.data.push(chartVal.global);
      });

      console.log("chartData",this.chart.data);

      this.chart.update();

    } )

  }

  estadoEncuesta() {
    const nroCuenta = JSON.parse(localStorage.getItem('info_alumno') || "{}").nro_cuenta;
    this.servicio.obtenerEstadoEncuesta(nroCuenta).subscribe( 
      (data) => {
      //console.log(data);
      this.estadoEncuestas = data; 
      },
      (error) => {error} 
      )
  }

  checkStatus( ) {
    return this.estadoEncuestas?.some( x => x.nro_cuenta === JSON.parse(localStorage.getItem('info_alumno') || "{}").nro_cuenta);

  }


  realizarEncuesta( id_cuestionario: number ) {
    this.route.navigate(['/Cuestionario/' + id_cuestionario]);
  }

  cambiasGrafica( event: any ) {
    event.target.classList.add('active');
    var element = document.getElementById('Tabla');
    element?.classList.remove('active');

    var grafic = document.getElementsByClassName('info_grafic')[0];
    grafic?.classList.remove('activePreview');
    var table = document.getElementsByClassName('info_table')[0];
    table?.classList.add('activePreview');
  }

  cambiasTabla( event:any) {
    //console.log("entro");
    event.target.classList.add("active");
    var element = document.getElementById('Grafica');
    element?.classList.remove('active');

    var grafic = document.getElementsByClassName('info_grafic')[0];
    grafic?.classList.add('activePreview');
    var table = document.getElementsByClassName('info_table')[0];
    table?.classList.remove('activePreview');
  }

}
