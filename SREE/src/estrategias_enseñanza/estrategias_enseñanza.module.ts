import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstrategiaEnsenanza } from './estrategias_enseñanza.entity';
import { EstrategiaEnsenanzaController } from './estrategias_enseñanza.controller';
import { EstrategiaEnsenanzaService } from './estrategias_enseñanza.service';
import { PerfilFinalInventarioDeFelder } from 'src/perfil_final_inventario_de_felder/perfil_final_inventario_de_felder.entity';
import { Grupos } from 'src/grupos/grupos.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([EstrategiaEnsenanza, PerfilFinalInventarioDeFelder, Grupos])],
  controllers: [EstrategiaEnsenanzaController],
  providers: [EstrategiaEnsenanzaService],
  exports: [EstrategiaEnsenanzaService],
})
export class EstrategiaEnsenanzaModule {}