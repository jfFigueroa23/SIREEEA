import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PreguntasController } from './preguntas.controller';
import { PreguntasService } from './preguntas.service';
import { Preguntas } from './preguntas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Preguntas])],
  controllers: [PreguntasController],
  providers: [PreguntasService],
})
export class PreguntasModule {}

