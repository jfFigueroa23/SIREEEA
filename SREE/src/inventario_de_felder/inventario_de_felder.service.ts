import { Injectable } from '@nestjs/common';
import { InventarioDeFelder } from './inventario_de_felder.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GenericService } from 'src/generic/generic.service';
import { RespuestasCompactadasDto } from './dto/respuestas_compactadas.dto';
import { PerfilFinalInventarioDeFelder } from 'src/perfil_final_inventario_de_felder/perfil_final_inventario_de_felder.entity';
import { ModeloFelder } from './inventario_de_felder.model';
import { EstrategiaEnsenanzaService } from 'src/estrategias_enseñanza/estrategias_enseñanza.service';

@Injectable()
export class InventarioDeFelderService extends GenericService<InventarioDeFelder>{
    constructor(
        @InjectRepository(InventarioDeFelder)
        private readonly InventarioDeFelderRepository: Repository<InventarioDeFelder>,
        @InjectRepository(PerfilFinalInventarioDeFelder)
        private readonly perfilFinalRepository: Repository<PerfilFinalInventarioDeFelder>,
        private readonly estrategiaEnseñanzaService: EstrategiaEnsenanzaService
    ){
        super(InventarioDeFelderRepository);
    }

    async findEstadoEncuesta(numAlumno: number): Promise<InventarioDeFelder[]> {
        return this.InventarioDeFelderRepository.find({ where: { nro_cuenta: numAlumno } });
    }

    async saveResultadoEncuesta(resultadoEncuestaDto: RespuestasCompactadasDto): Promise<InventarioDeFelder> {
        // revisar si existe ese registro
        const existingResponse = await this.InventarioDeFelderRepository.findOne({ where: { nro_cuenta: resultadoEncuestaDto.nro_cuenta } });

        if (existingResponse) {
            existingResponse.respuestas_compactadas = resultadoEncuestaDto.respuestas_compactadas;
            existingResponse.grupo = resultadoEncuestaDto.grupo;
            await this.InventarioDeFelderRepository.save(existingResponse);
            return existingResponse;
            
        } else {
            const newResponse = this.InventarioDeFelderRepository.create(resultadoEncuestaDto);
            return this.InventarioDeFelderRepository.save(newResponse);
        }
    }

    async savePerfilfinal(resultadoEncuestaDto: RespuestasCompactadasDto): Promise<PerfilFinalInventarioDeFelder> {
        // Buscar si ya existe un registro
        const existingProfile = await this.perfilFinalRepository.findOne({ where: { nro_cuenta: resultadoEncuestaDto.nro_cuenta } });
        
        const recuentos = {
            activo: 0,
            reflexivo: 0,
            sensorial: 0,
            intuitivo: 0,
            visual: 0,
            verbal: 0,
            secuencial: 0,
            global: 0,
            aux_1: "",
            aux_2: "",
            aux_3: "",
            aux_4: "",
        };
        
        for(let i = 0; i<44; i++){
            if((i === 0)|| (i === 4)||(i === 8)||(i === 12)||(i === 16)||(i === 20)||(i === 24)||(i === 28)||(i === 32)||(i === 36)||(i === 40)){
                if(resultadoEncuestaDto.respuestas_compactadas[i] === "A"){
                    recuentos.activo ++;
                }else if(resultadoEncuestaDto.respuestas_compactadas[i] === "B"){
                    recuentos.reflexivo ++;
                }
            }
            else if((i === 1)|| (i === 5)||(i === 9)||(i === 13)||(i === 17)||(i === 21)||(i === 25)||(i === 29)||(i === 33)||(i === 37)||(i === 41)){ 
                if(resultadoEncuestaDto.respuestas_compactadas[i] === "A"){
                    recuentos.sensorial ++;
                }else if(resultadoEncuestaDto.respuestas_compactadas[i] === "B"){
                    recuentos.intuitivo ++;
                }
            }else if((i === 2)|| (i === 6)||(i === 10)||(i === 14)||(i === 18)||(i === 22)||(i === 26)||(i === 30)||(i === 34)||(i === 38)||(i === 42)){
                if(resultadoEncuestaDto.respuestas_compactadas[i] === "A"){
                    recuentos.visual ++;
                }else if(resultadoEncuestaDto.respuestas_compactadas[i] === "B"){
                    recuentos.verbal ++;
                }
            } else if((i === 3)|| (i === 7)||(i === 11)||(i === 15)||(i === 19)||(i === 23)||(i === 27)||(i === 31)||(i === 35)||(i === 39)||(i === 43)){
                if(resultadoEncuestaDto.respuestas_compactadas[i] === "A"){
                    recuentos.secuencial ++;
                }else if(resultadoEncuestaDto.respuestas_compactadas[i] === "B"){
                    recuentos.global ++;
                }
            }
        }

        if(recuentos.activo>recuentos.reflexivo){
            recuentos.aux_1 = recuentos.activo-recuentos.reflexivo + 'A';
        }else{
            recuentos.aux_1 = recuentos.reflexivo-recuentos.activo + 'B';
        }
        if(recuentos.sensorial>recuentos.intuitivo){
            recuentos.aux_2 = recuentos.sensorial-recuentos.intuitivo + 'A';
        }else{
            recuentos.aux_2 = recuentos.intuitivo-recuentos.sensorial + 'B';
        }
        if(recuentos.visual>recuentos.verbal){
            recuentos.aux_3 = recuentos.visual-recuentos.verbal + 'A';
        }else{
            recuentos.aux_3 = recuentos.verbal-recuentos.visual + 'B';
        }
        if(recuentos.secuencial>recuentos.global){
            recuentos.aux_4 = recuentos.secuencial-recuentos.global + 'A';
        }else{
            recuentos.aux_4 = recuentos.global-recuentos.secuencial + 'B';
        }

        const perfilFinal = this.perfilFinalRepository.create({
            nro_cuenta: resultadoEncuestaDto.nro_cuenta,
            grupo: resultadoEncuestaDto.grupo,
            activo_reflexivo: recuentos.aux_1,
            sensorial_intuitivo: recuentos.aux_2,
            visual_verbal: recuentos.aux_3,
            secuencial_global: recuentos.aux_4,
        });
        
        if (existingProfile) {
            // Si existe, sobrescribirlo con los nuevos datos
            existingProfile.activo_reflexivo = recuentos.aux_1;
            existingProfile.sensorial_intuitivo = recuentos.aux_2;
            existingProfile.visual_verbal = recuentos.aux_3;
            existingProfile.secuencial_global = recuentos.aux_4;

            await this.perfilFinalRepository.save(existingProfile);
            await this.estrategiaEnseñanzaService.generarEstrategia(resultadoEncuestaDto.nro_cuenta);
            await this.estrategiaEnseñanzaService.calcularYGuardarModaParaGrupo(resultadoEncuestaDto.grupo);
            return existingProfile;
        } else {
            // Si no existe, guardarlo normalmente
            await this.perfilFinalRepository.save(perfilFinal);
            await this.estrategiaEnseñanzaService.generarEstrategia(resultadoEncuestaDto.nro_cuenta);
            await this.estrategiaEnseñanzaService.calcularYGuardarModaParaGrupo(resultadoEncuestaDto.grupo);
            return perfilFinal;
        }
    }
}
