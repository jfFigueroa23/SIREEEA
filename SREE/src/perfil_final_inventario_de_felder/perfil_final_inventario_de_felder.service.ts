import { Injectable } from '@nestjs/common';
import { PerfilFinalInventarioDeFelder } from './perfil_final_inventario_de_felder.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, In, Repository } from 'typeorm';
import { GenericService } from 'src/generic/generic.service';
import { Grupos } from 'src/grupos/grupos.entity';

@Injectable()
export class PerfilFinalInventarioDeFelderService extends GenericService<PerfilFinalInventarioDeFelder> {
  constructor(
    @InjectRepository(PerfilFinalInventarioDeFelder)
    private readonly perfilFinalInventarioDeFelderRepository: Repository<PerfilFinalInventarioDeFelder>,
    @InjectRepository(Grupos) private gruposRepository: Repository<Grupos>,
  ) {
    super(perfilFinalInventarioDeFelderRepository);
  }

  async findByGrupoIds(ids: number[]): Promise<PerfilFinalInventarioDeFelder[]> {
    return this.perfilFinalInventarioDeFelderRepository.find({ where: { grupo: In(ids) } });
  }

  async findByAlumnoIds(ids: number[]): Promise<PerfilFinalInventarioDeFelder[]> {
    return this.perfilFinalInventarioDeFelderRepository.find({ where: { grupo: In(ids) } });
  }

  async findResultadoAlumno(numAlumno: number): Promise<PerfilFinalInventarioDeFelder[]> {
    return this.perfilFinalInventarioDeFelderRepository.find({ where: { nro_cuenta: numAlumno } });
  }

  find(options?: FindManyOptions<PerfilFinalInventarioDeFelder>): Promise<PerfilFinalInventarioDeFelder[]> {
    return this.perfilFinalInventarioDeFelderRepository.find(options);
  }

  //Calcular la moda de inventario de Felder
  async findModaEstrategiasByNumGrupo(numGrupo: number): Promise<string[]> {
    const perfiles = await this.perfilFinalInventarioDeFelderRepository.find({
      where: { grupo: numGrupo },
      relations: ['ee1', 'ee2', 'ee3', 'ee4'],
    });//Ojo numGrupo es para el numero grupo especificamente

    // Crear un objeto para realizar un seguimiento de la frecuencia de cada estrategia de enseñanza
    const estrategiasFrecuencia: { [key: string]: number } = {};

    // Recorrer los perfiles y contar la frecuencia de cada estrategia de enseñanza
    perfiles.forEach((perfil) => {
      if (perfil.ee1 && perfil.ee1.titulo) {
        estrategiasFrecuencia[perfil.ee1.titulo] = (estrategiasFrecuencia[perfil.ee1.titulo] || 0) + 1;
      }

      if (perfil.ee2 && perfil.ee2.titulo) {
        estrategiasFrecuencia[perfil.ee2.titulo] = (estrategiasFrecuencia[perfil.ee2.titulo] || 0) + 1;
      }

      if (perfil.ee3 && perfil.ee3.titulo) {
        estrategiasFrecuencia[perfil.ee3.titulo] = (estrategiasFrecuencia[perfil.ee3.titulo] || 0) + 1;
      }

      if (perfil.ee4 && perfil.ee4.titulo) {
        estrategiasFrecuencia[perfil.ee4.titulo] = (estrategiasFrecuencia[perfil.ee4.titulo] || 0) + 1;
      }
    });

    // Convertir el objeto de frecuencia en un array de objetos [{ estrategia: string, frecuencia: number }]
    const estrategiasFrecuenciaArray = Object.keys(estrategiasFrecuencia).map((estrategia) => ({
      estrategia,
      frecuencia: estrategiasFrecuencia[estrategia],
    }));

    // Ordenar el array de estrategias por frecuencia de mayor a menor
    estrategiasFrecuenciaArray.sort((a, b) => b.frecuencia - a.frecuencia);

    // Obtener las estrategias ordenadas y limitarlas a 4
    const estrategiasOrdenadas = estrategiasFrecuenciaArray.map((item) => item.estrategia);
    const estrategiasLimitadas = estrategiasOrdenadas.slice(0, 4);

    return estrategiasLimitadas;
  }
}
