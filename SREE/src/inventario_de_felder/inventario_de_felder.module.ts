import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventarioDeFelder } from './inventario_de_felder.entity';
import { InventarioDeFelderService } from './inventario_de_felder.service';
import { InventarioDeFelderController } from './inventario_de_felder.controller';
import { PerfilFinalInventarioDeFelder } from 'src/perfil_final_inventario_de_felder/perfil_final_inventario_de_felder.entity';

@Module({
    imports: [TypeOrmModule.forFeature([InventarioDeFelder, PerfilFinalInventarioDeFelder])],
    providers: [InventarioDeFelderService],
    controllers: [InventarioDeFelderController]
})
export class InventarioDeFelderModule {}
