import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alumnos } from './alumnos.entity';
import { GenericService } from 'src/generic/generic.service';

@Injectable()
export class AlumnosService extends GenericService<Alumnos> {
  constructor(
    @InjectRepository(Alumnos) private readonly alumnosRepository: Repository<Alumnos>
  ) {
    super(alumnosRepository);
  }

  async obtenerAlumno(nroCuenta: number, password: string): Promise<Alumnos> {
    if(nroCuenta===undefined){
      return null
    }

    const alumno = await this.alumnosRepository.findOne({where: { nro_cuenta: nroCuenta }});

    if (alumno && alumno.contraseña === password) {
      return alumno;
    }

    return null;
  }
}
