import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { GenericController } from 'src/generic/generic.controller';
import { Preguntas } from './preguntas.entity';
import { PreguntasService } from './preguntas.service';

@Controller('preguntas')
export class PreguntasController extends GenericController<Preguntas, PreguntasService> {
  constructor(private readonly preguntasService: PreguntasService) {
    super(preguntasService);
  }

  @Get()
  async findAll(): Promise<Preguntas[]> {
    return this.preguntasService.find();
  }

  @Post()
  async create(@Body() entity: Preguntas) {
    return this.preguntasService.create(entity);
  }

  @Get(':id_cuestionario')
  async preguntasByIdCuestionario(@Param('id_cuestionario') idCuestionario: number): Promise<Preguntas[]> {
    return this.preguntasService.preguntasByIdCuestionario(idCuestionario);
  }
}
