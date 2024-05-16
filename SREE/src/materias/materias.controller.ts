import { Controller } from '@nestjs/common';
import { GenericController } from 'src/generic/generic.controller';
import { Materia } from './materias.entity';
import { MateriasService } from './materias.service';

@Controller('materias')
export class MateriasController extends GenericController<Materia, MateriasService> {
  constructor(private readonly materiasService: MateriasService) {
    super(materiasService);
  }
}
