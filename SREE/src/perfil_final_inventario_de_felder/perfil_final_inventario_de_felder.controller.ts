import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GenericController } from 'src/generic/generic.controller';
import { PerfilFinalInventarioDeFelder } from './perfil_final_inventario_de_felder.entity';
import { PerfilFinalInventarioDeFelderService } from './perfil_final_inventario_de_felder.service';

@Controller('perfil-final-inventario-de-felder')
export class PerfilFinalInventarioDeFelderController extends GenericController<PerfilFinalInventarioDeFelder, PerfilFinalInventarioDeFelderService> {
  constructor(private readonly perfilFinalInventarioDeFelderService: PerfilFinalInventarioDeFelderService) {
    super(perfilFinalInventarioDeFelderService);
  }

  @Get()
  async findAll(): Promise<PerfilFinalInventarioDeFelder[]> {
    return this.perfilFinalInventarioDeFelderService.find();
  }

  @Post()
  async create(@Body() entity: PerfilFinalInventarioDeFelder) {
    return this.perfilFinalInventarioDeFelderService.create(entity);
  }

  @Get('id_grupo/:id')
  async findByGrupoId(@Param('id') idGrupos: string) {
    const ids = idGrupos.split(',').map(Number);
    return this.perfilFinalInventarioDeFelderService.findByGrupoIds(ids);
  }

  @Get('id_alumno/:id')
  async findByAlumnoId(@Param('id') idAlumno: string) {
    const ids = idAlumno.split(',').map(Number);
    return this.perfilFinalInventarioDeFelderService.findByAlumnoIds(ids);
  }

  @Get('alumno/:numCuenta')
  async findByNumAlumno(@Param('numCuenta') numAlumno: number) {
    return this.perfilFinalInventarioDeFelderService.findResultadoAlumno(numAlumno);
  }

  @Get('moda_estrategias/:num_grupo')
  async findModaEstrategiasBynumGrupo(@Param('num_grupo') numGrupo: number) {
    return this.perfilFinalInventarioDeFelderService.findModaEstrategiasByNumGrupo(numGrupo);
  }

  @Post('test')
  test(@Body() filtros?: any){
    return this.find(filtros);
  }
}
