import { Controller, Get, Post, Body } from '@nestjs/common';
import { CarrerasService } from './carreras.service';
import { Carreras } from './carreras.entity';
import { GenericController } from 'src/generic/generic.controller';

@Controller('carreras')
export class CarrerasController extends GenericController<Carreras, CarrerasService>{
  constructor(private readonly carrerasService: CarrerasService) {
    super(carrerasService);
  }

  @Get()
  async findAll(): Promise<Carreras[]> {
    return this.carrerasService.find();
  }

  @Post()
  async create(@Body() entity: Carreras){
    return this.carrerasService.create(entity);
  }
}

