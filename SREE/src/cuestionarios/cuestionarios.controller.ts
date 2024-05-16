import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CuestionariosService } from './cuestionarios.service';
import { Cuestionarios } from './cuestionarios.entity';
import { GenericController } from 'src/generic/generic.controller';

@Controller('cuestionarios')
export class CuestionariosController extends GenericController<Cuestionarios,CuestionariosService>{
  constructor(private readonly cuestionariosService: CuestionariosService) {
    super(cuestionariosService)
  }

  @Get()
  async findAll(): Promise<Cuestionarios[]> {
    return this.cuestionariosService.find();
  }

  @Post()
  async create(@Body() entity: Cuestionarios){
    return this.cuestionariosService.create(entity);
  }

  @Get()
  async findById(@Param(':id') idCuestionario: number){
    return this.cuestionariosService.findByIdCuestionario(idCuestionario)
  }
}

