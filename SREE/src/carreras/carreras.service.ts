import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carreras } from './carreras.entity';
import { GenericService } from 'src/generic/generic.service';

@Injectable()
export class CarrerasService extends GenericService<Carreras>{
  constructor(
    @InjectRepository(Carreras) carrerasRepository: Repository<Carreras>) {
      super(carrerasRepository)
    }
}

