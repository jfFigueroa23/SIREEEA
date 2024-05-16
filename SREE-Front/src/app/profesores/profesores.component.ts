import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {
  alumnos: any[] = [];
  grupos: any[] = [];
  grupoSeleccionado: number = 0;
  alumnosFiltrados: any[] = [];
  profesor: any;
  carreras: string[] = ['Ing. Software','Ing. Civil', 'Ing. Geodesia'];
  carreraSeleccionada: string | null = null;
  datos: any;
  nombreAlumno:string = '';
  idGrupo: any;
  // Estrategias enseñanza
  tituloEE1: string = '';
  descripcionEE1: string = '';
  tituloEE2: string = '';
  descripcionEE2: string = '';
  tituloEE3: string = '';
  descripcionEE3: string = '';
  tituloEE4: string = '';
  descripcionEE4: string = '';
  conteoEE1: number = 0;
  conteoEE2: number = 0;
  conteoEE3: number = 0;
  conteoEE4: number = 0;

  
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.obtenerAlumnos();
  }

  //https://apiv2.reprobados.com
  //http://localhost:3000
  //urlprincipal = "https://apiv2.powerhashing.io";  //WebProd
  urlprincipal = "http://localhost:3000";         //DevMode

  obtenerConteoEstrategias(idGrupo: number): void {
    const url = this.urlprincipal + `/grupos/grupo/conteo/${idGrupo}`;
    this.http.get(url).subscribe(
      (response: any) => {
        this.datos = response; // Solo toma el primer elemento del arreglo
        
        console.log("datos de conteo: "+this.datos['1'])
        // Utilizamos notación de corchetes para acceder a las propiedades
        this.conteoEE1 = this.datos['1'];
        this.conteoEE2 = this.datos['2'];
        this.conteoEE3 = this.datos['3'];
        this.conteoEE4 = this.datos['4'];
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }

  obtenerEstrategias(idGrupo: number): void {
    const url = this.urlprincipal + `/grupos/grupo/${idGrupo}`;
    this.http.get(url).subscribe(
      (response: any) => {
        this.datos = response; // Solo toma el primer elemento del arreglo
        this.tituloEE1 = this.datos.ee1.titulo;
        this.descripcionEE1 = this.datos.ee1.descripcion;
        this.tituloEE2 = this.datos.ee2.titulo;
        this.descripcionEE2 = this.datos.ee2.descripcion;
        this.tituloEE3 = this.datos.ee3.titulo;
        this.descripcionEE3 = this.datos.ee3.descripcion;
        this.tituloEE4 = this.datos.ee4.titulo;
        this.descripcionEE4 = this.datos.ee4.descripcion;
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }
  alumnoSeleccionado: boolean = false; //sirve para mostrar si es grupo o alumno
  verDetalles(alumno: any): void {
    const url = `${this.urlprincipal}/perfil-final-inventario-de-felder/alumno/${alumno.nro_cuenta}`;
    this.http.get(url).subscribe(
      (response: any) => {
          const estrategias = response[0]; // Accede al primer elemento del array
          this.tituloEE1 = estrategias.ee1.titulo;
          this.descripcionEE1 = estrategias.ee1.descripcion;
          this.tituloEE2 = estrategias.ee2.titulo;
          this.descripcionEE2 = estrategias.ee2.descripcion;
          this.tituloEE3 = estrategias.ee3.titulo;
          this.descripcionEE3 = estrategias.ee3.descripcion;
          this.tituloEE4 = estrategias.ee4.titulo;
          this.descripcionEE4 = estrategias.ee4.descripcion;
          this.alumnoSeleccionado = true;
          this.nombreAlumno = alumno.nombre +' '+ alumno.apellido_1 +' '+ alumno.apellido_2;
      },
      (error) => {
          console.error('Error al obtener los detalles:', error);
      }
  );
}

  obtenerAlumnos(): void {
    this.obtenerGrupos();

    this.http.get<any[]>(this.urlprincipal+'/alumnos').subscribe(
      (response) => {
        this.alumnos = response;
        const gruposUnicos = [...new Set(this.alumnos.map((alumno) => alumno.grupo))];
        this.grupos = gruposUnicos.map((grupo) => ({ grupo }));
        this.alumnos.forEach((alumno) => {
          alumno.grupo = alumno.grupo;
        });
        console.log('Alumnos Obtenidos:', this.alumnos);
      },
      (error) => {
        console.log('Error al obtener los datos de los alumnos:', error);
      }
    );
  }

  obtenerGrupos(): void {
    const idProfesor = this.authService.obtenerUsuario().id_profesor;
    const url = this.urlprincipal+`/grupos_asignados/id_profesor/${idProfesor}`;
    console.log("ID DEL PROFESOR: ",idProfesor)
    this.http.get<any[]>(url).subscribe(
      (gruposAsignados: any[]) => {
        const idGrupos = gruposAsignados.map((grupo) => grupo.id_grupo);
        const urlGrupos = this.urlprincipal+`/grupos/id_grupo/${idGrupos.join(',')}`;
  
        this.http.get<any[]>(urlGrupos).subscribe(
          (grupos: any[]) => {
            this.grupos = grupos;
          },
          (error) => {
            console.error('Error al obtener los grupos:', error);
          }
        );
      },
      (error) => {
        console.error('Error al obtener los grupos asignados:', error);
      }
    );
  }
  

  filtrarGrupos(event: any): void {
    const valor = event.target.value;
    if (valor === 'todos') {
      this.alumnosFiltrados = [...this.alumnos];
    } else {
      this.alumnosFiltrados = this.alumnos.filter((alumno) => String(alumno.grupo) === valor);
      this.grupoSeleccionado = valor;
      this.obtenerEstrategias(valor); // Llamar a obtenerEstrategias() con el id del grupo seleccionado
      this.obtenerConteoEstrategias(valor);
    }
  }
  
  onCarreraSelectionChange(){
    //todo carreras
  }

  getNombreCompleto(alumno: any): string {
    return `${alumno.nombre} ${alumno.apellido_1} ${alumno.apellido_2}`;
  }
}
