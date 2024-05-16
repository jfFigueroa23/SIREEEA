import * as fs from 'fs';
import * as csvParser from 'csv-parser';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Profesor } from './profesor.entity';
import { GenericService } from 'src/generic/generic.service';
import { AlumnosImportData } from './dto/alumnos.dto';
import { Alumnos } from 'src/alumnos/alumnos.entity';
import { LoginDto } from './dto/login.dto';
import { ProfesorDTO } from './dto/profesor.dto';

@Injectable()
export class ProfesorService extends GenericService<Profesor> {
  constructor(
    @InjectRepository(Profesor)
    private readonly profesorRepository: Repository<Profesor>,
    @InjectRepository(Alumnos)
    private readonly alumnosRepository: Repository<Alumnos>,
  ) {
    super(profesorRepository);
  }

  // Login Profesores
  async login(loginDto: LoginDto): Promise<ProfesorDTO> {
    const { nro_empleado, contra } = loginDto;

    if (!nro_empleado || !contra) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const options: FindOneOptions<Profesor> = {where: {nro_empleado, contra}};
    const profesor = await this.profesorRepository.findOne(options);

    if (!profesor) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const info = new ProfesorDTO();
    info.id_profesor = profesor.id_profesor;
    info.nombre_profesor = profesor.nombre_profesor;

    return info;
  }

  // Importar Jovenes
  async parseCsvToEntities(filePath: string): Promise<AlumnosImportData[]> {
    const entities: AlumnosImportData[] = [];
    
    await new Promise<void>((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csvParser({ headers: ['nro_cuenta', 'contraseña', 'apellido_1', 'apellido_2', 'nombre', 'fecha_nacimiento', 'id_grupo'] })) // Especificar los nombres de las columnas
        .on('data', (data: any) => {
          const alumnos = new AlumnosImportData();
          alumnos.nro_cuenta = data.nro_cuenta;
          alumnos.contraseña = data.contraseña;
          alumnos.nombre = data.nombre;
          alumnos.apellido_1 = data.apellido_1;
          alumnos.apellido_2 = data.apellido_2;
          alumnos.fecha_nacimiento = data.fecha_nacimiento;
          alumnos.grupo = data.id_grupo;
          entities.push(alumnos);
        })
        .on('end', () => resolve())
        .on('error', (error: any) => reject(error));
    });

        // Transformar los objetos AlumnosImportData a objetos Alumno
        const alumnos: Alumnos[] = entities.map(entity => {
          const alumnos = new Alumnos();
          alumnos.nro_cuenta = entity.nro_cuenta;
          alumnos.contraseña = entity.contraseña;
          alumnos.nombre = entity.nombre;
          alumnos.apellido_1 = entity.apellido_1;
          alumnos.apellido_2 = entity.apellido_2;
          alumnos.fecha_nacimiento = entity.fecha_nacimiento;
          alumnos.grupo = entity.grupo;
          return alumnos;
        });

    // Realizar bulk insert utilizando el Query Builder
    await this.alumnosRepository
      .createQueryBuilder()
      .insert()
      .into(Alumnos) // Entity
      .values(alumnos) // Values
      .orIgnore() // Ignorar la inserción en caso de conflicto
      .execute();
        ///Favor de manejar el error 500
    return entities;
  }
}

