import { Body, Controller, Get, Post } from '@nestjs/common';
import { Profesor } from './profesor.entity';
import { ProfesorService } from './profesor.service';
import { GenericController } from 'src/generic/generic.controller';
import { AlumnosImportData } from './dto/alumnos.dto';
import { LoginDto } from './dto/login.dto';

@Controller('profesores')
export class ProfesorController extends GenericController<Profesor, ProfesorService> {
  constructor(private readonly profesorService: ProfesorService) {
    super(profesorService);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.profesorService.login(loginDto);
  }

  @Get('/importaralumnos')
  async getCsvData(): Promise<AlumnosImportData[]> {
    const filePath = 'src/profesor/files/alumnos.csv'; // Ruta del archivo CSV a leer

    try {
      const entities = await this.profesorService.parseCsvToEntities(filePath);
      return entities;
    } catch (error) {
      // Manejo de errores
      throw new Error('Error al leer el archivo CSV.');
    }
  }

    /*No se usaran de momento
  @Get()
  async findAll(): Promise<Profesor[]> {
    return this.profesorService.find();
  }

  @Post()
  async create(@Body() entity: Profesor){
    return this.profesorService.create(entity);
  }*/
}

