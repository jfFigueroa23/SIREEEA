import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grupos } from './grupos.entity';
import { GruposController } from './grupos.controller';
import { GruposService } from './grupos.service';
import { EstrategiaEnsenanzaModule } from 'src/estrategias_enseñanza/estrategias_enseñanza.module';
import { PerfilFinalInventarioDeFelder } from 'src/perfil_final_inventario_de_felder/perfil_final_inventario_de_felder.entity';

@Module({
  imports: [EstrategiaEnsenanzaModule, TypeOrmModule.forFeature([Grupos, PerfilFinalInventarioDeFelder])],
  controllers: [GruposController],
  providers: [GruposService],
})
export class GruposModule {}