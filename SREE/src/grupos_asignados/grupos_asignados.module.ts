import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GruposAsignadosController } from './grupos_asignados.controller';
import { GruposAsignadosService } from './grupos_asignados.service';
import { GruposAsignados } from './grupos_asignados.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GruposAsignados])],
  controllers: [GruposAsignadosController],
  providers: [GruposAsignadosService],
})
export class GruposAsignadosModule {}

