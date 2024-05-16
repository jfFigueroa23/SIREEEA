import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GenericService } from 'src/generic/generic.service';
import { EstrategiaEnsenanza } from './estrategias_enseñanza.entity';
import { PerfilFinalInventarioDeFelder } from 'src/perfil_final_inventario_de_felder/perfil_final_inventario_de_felder.entity';
import { Grupos } from 'src/grupos/grupos.entity';

@Injectable()
export class EstrategiaEnsenanzaService extends GenericService<EstrategiaEnsenanza> {
  constructor(
    @InjectRepository(PerfilFinalInventarioDeFelder)private perfilFinalRepository: Repository<PerfilFinalInventarioDeFelder>,
    @InjectRepository(EstrategiaEnsenanza) estrategiaEnsenanzaRepository: Repository<EstrategiaEnsenanza>,
    @InjectRepository(Grupos) private gruposRepository: Repository<Grupos>,
  ) {
    super(estrategiaEnsenanzaRepository);
  }

  //RECUERDE IMPLEMENTAR ELECTRE III PARA ESTA SECCION

  async generarEstrategia(nroCuenta: number): Promise<PerfilFinalInventarioDeFelder> {
    const perfil = await this.perfilFinalRepository.findOne({ where: { nro_cuenta: nroCuenta } });

    if (!perfil) {
      throw new Error('Perfil no encontrado');
    }

    const estilosAprendizaje = {
      activo_reflexivo: perfil.activo_reflexivo.charAt(perfil.activo_reflexivo.length - 1),
      sensorial_intuitivo: perfil.sensorial_intuitivo.charAt(perfil.sensorial_intuitivo.length - 1),
      visual_verbal: perfil.visual_verbal.charAt(perfil.visual_verbal.length - 1),
      secuencial_global: perfil.secuencial_global.charAt(perfil.secuencial_global.length - 1),
    };

    const estrategiaEnseñanza = {
      ee1: 0,
      ee2: 0,
      ee3: 0,
      ee4: 0,
    };

    // Asignar valores a la estrategia según las categorías
    if (estilosAprendizaje.activo_reflexivo === 'A') {
      estrategiaEnseñanza.ee1 = 1;
    } else {
      estrategiaEnseñanza.ee1 = 2;
    }

    if (estilosAprendizaje.sensorial_intuitivo === 'A') {
      estrategiaEnseñanza.ee2 = 3;
    } else {
      estrategiaEnseñanza.ee2 = 4;
    }

    if (estilosAprendizaje.visual_verbal === 'A') {
      estrategiaEnseñanza.ee3 = 5;
    } else {
      estrategiaEnseñanza.ee3 = 6;
    }

    if (estilosAprendizaje.secuencial_global === 'A') {
      estrategiaEnseñanza.ee4 = 7;
    } else {
      estrategiaEnseñanza.ee4 = 8;
    }

    // Actualizar el perfilFinalRepository con los valores de estrategia.ee1, ee2, ee3, y ee4
    await this.perfilFinalRepository.update(
      { nro_cuenta: nroCuenta },
      {
        // No se olviden de los Partial
        ee1: { id: estrategiaEnseñanza.ee1 }, 
        ee2: { id: estrategiaEnseñanza.ee2 }, 
        ee3: { id: estrategiaEnseñanza.ee3 }, 
        ee4: { id: estrategiaEnseñanza.ee4 }
      }
    );

    return perfil;
  }
  
  // Calcular Moda ids por inventario de felder y guardar modas en grupos
  async calcularYGuardarModaParaGrupo(numGrupo: number): Promise<void> {
    const perfiles = await this.perfilFinalRepository.find({
      where: { grupo: numGrupo },
      relations: ['ee1', 'ee2', 'ee3', 'ee4'],
    });

    // Crear un objeto para realizar un seguimiento de la frecuencia de cada estrategia de enseñanza
    const estrategiasFrecuencia: { [key: string]: number } = {};

    // Recorrer los perfiles y contar la frecuencia de cada estrategia de enseñanza
    perfiles.forEach((perfil) => {
      if (perfil.ee1 && perfil.ee1.id) {
        estrategiasFrecuencia[perfil.ee1.id.toString()] = (estrategiasFrecuencia[perfil.ee1.id.toString()] || 0) + 1;
      }

      if (perfil.ee2 && perfil.ee2.id) {
        estrategiasFrecuencia[perfil.ee2.id.toString()] = (estrategiasFrecuencia[perfil.ee2.id.toString()] || 0) + 1;
      }

      if (perfil.ee3 && perfil.ee3.id) {
        estrategiasFrecuencia[perfil.ee3.id.toString()] = (estrategiasFrecuencia[perfil.ee3.id.toString()] || 0) + 1;
      }

      if (perfil.ee4 && perfil.ee4.id) {
        estrategiasFrecuencia[perfil.ee4.id.toString()] = (estrategiasFrecuencia[perfil.ee4.id.toString()] || 0) + 1;
      }
    });

    // Encontrar las estrategias más frecuentes
    const estrategiasOrdenadas = Object.keys(estrategiasFrecuencia).sort((a, b) => estrategiasFrecuencia[b] - estrategiasFrecuencia[a]);
    const estrategiasModa = estrategiasOrdenadas.slice(0, 4).map(Number);

    // Guardar las estrategias más frecuentes en la tabla Grupos
    await this.gruposRepository.update(
      { grupo: numGrupo },
      {
        ee1: { id: estrategiasModa[0] || null }, 
        ee2: { id: estrategiasModa[1] || null },
        ee3: { id: estrategiasModa[2] || null },
        ee4: { id: estrategiasModa[3] || null },
      },
    );
  }
  
}
