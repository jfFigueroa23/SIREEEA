import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cuestionarios } from './cuestionarios.entity';
import { CuestionariosController } from './cuestionarios.controller';
import { CuestionariosService } from './cuestionarios.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cuestionarios])],
  controllers: [CuestionariosController],
  providers: [CuestionariosService],
})
export class CuestionariosModule {}
