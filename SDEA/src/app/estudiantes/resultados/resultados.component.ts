import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AlumnoService } from 'src/app/services/alumno.service';
import { chartValues } from '../inicio/lista.model';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  public chart: any

  activo: number = 0;
  reflexivo: number = 0;
  sensorial: number = 0;
  intuitivo: number = 0;
  visual: number = 0;
  verbal: number = 0;
  secuencial: number = 0;
  global: number = 0;

  constructor( private servicio: AlumnoService ) { }

  ngOnInit(): void {

    this.createChart();


  }

  ngAfterViewInit() {
    this.obtenerPerfilAlumno();
  }

  createChart() {

    this.chart = new Chart("MyChart", {
      type: 'radar',
      data: {
        labels: [ 'Activo', 'Sensorial', 'Visual', 'Secuencial', 'Reflexivo', 'Intuitivo', 'Verbal', 'Global' ],
        datasets: [
          {
            label: 'Tu Perfil',
            data: [],
            backgroundColor: 'rgba(46, 155, 236, 0.5)',
            borderColor: 'rgba(30, 36, 64, 0.6)',
            borderWidth: 1,
            pointBackgroundColor: '#2E9BEC'
          }
        ]
      },
      options: {
        scales: {
            r: {
                angleLines: {
                    display: false
                },
                suggestedMin: 0,
                suggestedMax: 5
            }
        }
      } 
    });
  }

  obtenerPerfilAlumno() {
    const chartVal = new chartValues();
    this.servicio.obtenerPerfil( 
      JSON.parse(localStorage.getItem('info_alumno') || "{}").nro_cuenta,
    ).subscribe ( (data) => {
      const valorActivoReflexivo = data[0].activo_reflexivo.slice(0, -1);
      const letraActivoReflexivo = data[0].activo_reflexivo.slice(-1);
      if (letraActivoReflexivo === 'A') {
        this.activo = valorActivoReflexivo;
        chartVal.activo = 5 + (this.activo / 22)*10;
        chartVal.reflexivo = 5 - (this.activo / 22)*10;
        document.getElementById('a' + this.activo)!.innerHTML = "x";
        document.getElementById('Estilo1')!.innerHTML = "Activo";
        document.getElementById('Info1')!.innerHTML = "Es el estilo propio de las personas que tienden a participar o a involucrarse en las experiencias.";
      } else if (letraActivoReflexivo === 'B')  {
        this.reflexivo = valorActivoReflexivo;
        chartVal.activo = 5 - (this.reflexivo / 22)*10;
        chartVal.reflexivo = 5 + (this.reflexivo / 22)*10;
        document.getElementById('r' + this.reflexivo)!.innerHTML = "x";
        document.getElementById('Estilo1')!.innerHTML = "Reflexivo";
        document.getElementById('Info1')!.innerHTML = "Es la forma de aprendizaje propia de las personas con tendencia a la introspección y a la observación.";
      }

      // Bloque 2
      const valorSensorialIntuitivo = data[0].sensorial_intuitivo.slice(0, -1);
      const letraSensorialIntuitivo = data[0].sensorial_intuitivo.slice(-1);
      if (letraSensorialIntuitivo === 'A') {
        this.sensorial = valorSensorialIntuitivo;
        chartVal.sensorial = 5 + (this.sensorial / 22)*10;
        chartVal.intuitivo = 5 - (this.sensorial / 22)*10;
        document.getElementById('s' + this.sensorial)!.innerHTML = "x";
        document.getElementById('Estilo2')!.innerHTML = "Sensorial";
        document.getElementById('Info2')!.innerHTML = "Es la forma de aprender característica de aquellos que prefieren las actividades prácticas.";
      } else if (letraSensorialIntuitivo === 'B') {
        this.intuitivo = valorSensorialIntuitivo;
        chartVal.sensorial = 5 - (this.intuitivo / 22)*10;
        chartVal.intuitivo = 5 + (this.intuitivo / 22)*10;
        document.getElementById('i' + this.intuitivo)!.innerHTML = "x";
        document.getElementById('Estilo2')!.innerHTML = "Intuitivo";
        document.getElementById('Info2')!.innerHTML = "Implica el descubrimiento de nueva información por medios propios.";
      }

      // Bloque 3
      const valorVisualVerbal = data[0].visual_verbal.slice(0, -1);
      const letraVisualVerbal = data[0].visual_verbal.slice(-1);
      if (letraVisualVerbal === 'A') {
        this.visual = valorVisualVerbal;
        chartVal.visual = 5 + (this.visual / 22)*10;
        chartVal.verbal = 5 - (this.visual / 22)*10;
        document.getElementById('v' + this.visual)!.innerHTML = "x";
        document.getElementById('Estilo3')!.innerHTML = "Visual";
        document.getElementById('Info3')!.innerHTML = "La información se obtiene a partir de imágenes (fotos, videos, diagramas, etc).";
      } else if (letraVisualVerbal === 'B') {
        this.verbal = valorVisualVerbal;
        chartVal.visual = 5 - (this.verbal / 22)*10;
        chartVal.verbal = 5 + (this.verbal / 22)*10;
        document.getElementById('ve' + this.verbal)!.innerHTML = "x";
        document.getElementById('Estilo3')!.innerHTML = "Verbal";
        document.getElementById('Info3')!.innerHTML = "En este caso, la información es asimilada de forma oral o escrita.";
      }

      // Bloque 4
      const valorSecuencialGlobal = data[0].secuencial_global.slice(0, -1);
      const letraSecuencialGlobal = data[0].secuencial_global.slice(-1);
      if (letraSecuencialGlobal === 'A') {
        this.secuencial = valorSecuencialGlobal;
        chartVal.secuencial = 5 + (this.secuencial / 22)*10;
        chartVal.global = 5 - (this.secuencial / 22)*10;
        document.getElementById('se' + this.secuencial)!.innerHTML = "x";
        document.getElementById('Estilo4')!.innerHTML = "Secuencial";
        document.getElementById('Info4')!.innerHTML = "Es una forma de aprender propia de quienes necesitan concatenar datos relacionados entre sí.";
      } else if (letraSecuencialGlobal === 'B') {
        this.global = valorSecuencialGlobal;
        chartVal.secuencial = 5 - (this.global / 22)*10;
        chartVal.global = 5 + (this.global / 22)*10;
        document.getElementById('g' + this.global)!.innerHTML = "x";
        document.getElementById('Estilo4')!.innerHTML = "Global";
        document.getElementById('Info4')!.innerHTML = "Pueden ver la información de manera holística, por lo que les resulta más sencillo integrar datos para sacar conclusiones.";
      }


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

      //console.log(this.chart.data);

      this.chart.update();

    } )

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
    event.target.classList.add("active");
    var element = document.getElementById('Grafica');
    element?.classList.remove('active');

    var grafic = document.getElementsByClassName('info_grafic')[0];
    grafic?.classList.add('activePreview');
    var table = document.getElementsByClassName('info_table')[0];
    table?.classList.remove('activePreview');
  }


}
