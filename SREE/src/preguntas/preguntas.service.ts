import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GenericService } from 'src/generic/generic.service';
import { Preguntas } from './preguntas.entity';

@Injectable()
export class PreguntasService extends GenericService<Preguntas> {
  constructor(
    @InjectRepository(Preguntas)
    private readonly preguntasRepository: Repository<Preguntas>,
  ) {
    super(preguntasRepository);
  }

  async preguntasByIdCuestionario (idCuestionario: number): Promise<Preguntas[]> {
    const preguntas = await this.preguntasRepository.find({ 
      where: { id_cuestionario: idCuestionario },
      order: { num_pregunta:'ASC' },
    });
    return preguntas;
  }
}

