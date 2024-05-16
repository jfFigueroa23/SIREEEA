import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GenericService } from 'src/generic/generic.service';
import { Materia } from './materias.entity';

@Injectable()
export class MateriasService extends GenericService<Materia> {
  constructor(
    @InjectRepository(Materia)
    private materiasRepository: Repository<Materia>,
  ) {
    super(materiasRepository);
  }
}
