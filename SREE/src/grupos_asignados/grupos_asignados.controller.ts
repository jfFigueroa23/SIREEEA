import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { GruposAsignadosService } from './grupos_asignados.service';
import { GruposAsignados } from './grupos_asignados.entity';
import { GenericController } from 'src/generic/generic.controller';

@Controller('grupos_asignados')
export class GruposAsignadosController extends GenericController<GruposAsignados, GruposAsignadosService>{
  constructor(private readonly gruposAsignadosService: GruposAsignadosService) {
    super(gruposAsignadosService);
  }

  @Get()
  async findAll(): Promise<GruposAsignados[]> {
    return this.gruposAsignadosService.find();
  }

  @Post()
  async create(@Body() entity: GruposAsignados){
    return this.gruposAsignadosService.create(entity);
  }

  // El objetivo es obtener el id_profesor para trabajar con el en vez del id
  @Get('id_profesor/:id')
  async findByProfesorId(@Param('id') idProfesor: number) {
    return this.gruposAsignadosService.findAllByProfesorId(idProfesor);
  }
}

