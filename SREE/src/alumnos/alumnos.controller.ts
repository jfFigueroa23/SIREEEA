import { Controller, Body, Get, Post } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { Alumnos } from './alumnos.entity';
import { GenericController } from 'src/generic/generic.controller';

@Controller('alumnos')
export class AlumnosController extends GenericController<Alumnos,AlumnosService>{
  constructor(private readonly alumnosService: AlumnosService) {
    super(alumnosService);
  }

  @Get()
  async findAll(): Promise<Alumnos[]> {
    return this.alumnosService.find();
  }

  @Post()
  async create(@Body() entity: Alumnos) {
    return this.alumnosService.create(entity);
  }

  @Post('login')
  async login(@Body() body: { nro_cuenta: number; password: string }) {
    const { nro_cuenta, password } = body;
    // Buscar el alumno basado en el nroCuenta
    const alumno = await this.alumnosService.obtenerAlumno(nro_cuenta, password);
    
    if (!alumno || alumno.contraseña !== password) {
      // El inicio de sesión falló
      // Devolver un error o un objeto con el mensaje de error correspondiente
      return { error: 'Credenciales inválidas' };
    }

    // Inicio de sesión exitoso
    return alumno;
  }

}

