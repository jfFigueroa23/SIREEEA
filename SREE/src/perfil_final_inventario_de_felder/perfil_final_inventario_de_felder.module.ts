import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerfilFinalInventarioDeFelder } from './perfil_final_inventario_de_felder.entity';
import { PerfilFinalInventarioDeFelderController } from './perfil_final_inventario_de_felder.controller';
import { PerfilFinalInventarioDeFelderService } from './perfil_final_inventario_de_felder.service';
import { Grupos } from 'src/grupos/grupos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PerfilFinalInventarioDeFelder, Grupos])],
  controllers: [PerfilFinalInventarioDeFelderController],
  providers: [PerfilFinalInventarioDeFelderService],
})
export class PerfilFinalInventarioDeFelderModule {}

