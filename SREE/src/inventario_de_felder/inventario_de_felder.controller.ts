import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GenericController } from 'src/generic/generic.controller';
import { InventarioDeFelder } from './inventario_de_felder.entity';
import { InventarioDeFelderService } from './inventario_de_felder.service';
import { RespuestasCompactadasDto } from './dto/respuestas_compactadas.dto';

@Controller('inventario-de-felder')
export class InventarioDeFelderController extends GenericController<InventarioDeFelder,InventarioDeFelderService>{
    constructor(private readonly inventarioDeFelderService: InventarioDeFelderService) {
        super(inventarioDeFelderService);
    }

    @Get()
    async findAll(): Promise<InventarioDeFelder[]> {
        return this.inventarioDeFelderService.find();
    }

    @Post()//Solo pruebas no se utilice en produccion
    async create(@Body() entity: InventarioDeFelder){
        return this.inventarioDeFelderService.create(entity);
    }

    @Get('alumno/:nroCuenta')
    async estadoEncuesta(@Param('nroCuenta') numAlumno: number) {
      return this.inventarioDeFelderService.findEstadoEncuesta(numAlumno);
    }

    @Post('resultado-encuesta')
    async saveResultadoEncuesta(@Body() respuestasCompactadasDto: RespuestasCompactadasDto) {
        return this.inventarioDeFelderService.saveResultadoEncuesta(respuestasCompactadasDto) && this.inventarioDeFelderService.savePerfilfinal(respuestasCompactadasDto);
    }
}
