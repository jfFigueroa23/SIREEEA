import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})

export class PrincipalComponent implements OnInit{
  alumnos: any[] = [];
  grupos: any[] = [];
  grupoSeleccionado: any;
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

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.obtenerAlumnos();
  }

  //urlprincipal = "https://apiv2.powerhashing.io";  //WebProd
  urlprincipal = "http://localhost:3000";         //DevMode

  obtenerEstrategias(idGrupo: number): void {
    const url = this.urlprincipal + `/grupos/grupo/${idGrupo}`;
    this.http.get(url).subscribe(
      (response: any) => {
        this.datos = response[0]; // Solo toma el primer elemento del arreglo
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
    }
  }
  onCarreraSelectionChange(){
    //todo carreras
  }

  getNombreCompleto(alumno: any): string {
    return `${alumno.nombre} ${alumno.apellido_1} ${alumno.apellido_2}`;
  }
}
