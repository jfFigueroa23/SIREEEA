import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { GruposAsignados } from './grupos_asignados.entity';
import { GenericService } from 'src/generic/generic.service';

@Injectable()
export class GruposAsignadosService extends GenericService<GruposAsignados> {
  constructor(
    @InjectRepository(GruposAsignados)
    private readonly gruposAsignadosRepository: Repository<GruposAsignados>
  ) {
    super(gruposAsignadosRepository);
  }

  async findAllByProfesorId(idProfesor: number): Promise<GruposAsignados[]> {
    return this.gruposAsignadosRepository.find({ where: { id_profesor: idProfesor } });
  }
}