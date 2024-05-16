import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profesor } from './profesor.entity';
import { ProfesorService } from './profesor.service';
import { ProfesorController } from './profesor.controller';
import { Alumnos } from 'src/alumnos/alumnos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Profesor,Alumnos])],
  providers: [ProfesorService],
  controllers: [ProfesorController],
})
export class ProfesorModule {}
