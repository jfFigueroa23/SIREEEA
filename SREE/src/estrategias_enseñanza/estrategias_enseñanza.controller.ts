import { Controller, Get, Param } from '@nestjs/common';
import { GenericController } from 'src/generic/generic.controller';
import { EstrategiaEnsenanza } from './estrategias_enseñanza.entity';
import { EstrategiaEnsenanzaService } from './estrategias_enseñanza.service';

@Controller('estrategias-ensenanza')
export class EstrategiaEnsenanzaController extends GenericController<EstrategiaEnsenanza,EstrategiaEnsenanzaService> {
  constructor(private readonly estrategiaEnsenanzaService: EstrategiaEnsenanzaService) {
    super(estrategiaEnsenanzaService);
  }

  @Get('make/:nroCuenta')
  async generarEstrategia(@Param('nroCuenta') nroCuenta: number) {
      return this.estrategiaEnsenanzaService.generarEstrategia(nroCuenta)
  }

  @Get('save_moda_estrategias/:num_grupo')
  async saveModaEstrategiasBynumGrupo(@Param('num_grupo') numGrupo: number) {
    return this.estrategiaEnsenanzaService.calcularYGuardarModaParaGrupo(numGrupo);
  }
}

