import {
    Body,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Put,
    Query,
  } from '@nestjs/common';
  import { FindManyOptions } from 'typeorm';
  import { GenericEntity } from './generic.entity';
  import { GenericService } from './generic.service';

  export abstract class GenericController<
    Entity extends GenericEntity,
    Service extends GenericService<Entity>,
  > {
    constructor(private readonly service: Service) { }

    @Post()
    async create(@Body() entity: Entity) {
      return this.service.create(entity);
    }
  
    @Get()
    async find(@Query() options?: FindManyOptions<Entity>) {
      return this.service.find({ ...options });
    }
  
    @Get(':id')
    async findOne(@Param('id') id: number) {
      return this.service.findOneById(id);
    }
  
    @Put(':id')
    @Patch(':id')
    async update(@Param('id') id: number, @Body() entity: Entity) {
      if (id != entity.id) return;
      return this.service.update(id, entity);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: number) {
      return this.service.delete(id);
    }
  }
  
