import {
    DeleteResult,
    FindManyOptions,
    FindOneOptions,
    InsertResult,
    Repository,
  } from 'typeorm';
  import {
    QueryDeepPartialEntity,
    QueryPartialEntity,
  } from 'typeorm/query-builder/QueryPartialEntity';
  import { GenericEntity } from './generic.entity';
  
  export abstract class GenericService<Entity extends GenericEntity> {
    constructor(private readonly repository: Repository<Entity>) {}
  
    create(
      entity: QueryPartialEntity<Entity> | QueryPartialEntity<Entity>[] | Entity,
    ): Promise<InsertResult> {
      return this.repository.insert(entity as QueryDeepPartialEntity<Entity>);
    }
  
    find(options?: FindManyOptions<Entity>): Promise<Entity[]> {
      return this.repository.find(options);
    }
  
    findOne(options?: FindOneOptions<Entity>): Promise<Entity> {
      return this.repository.findOne(options);
    }
  
    findOneById(id): Promise<Entity> {
      return this.repository.findOne({ where: { id } });
    }
  
    async update(id, entity: any) {
      const info = await this.repository.findOne({ where: { id } });
      this.repository.merge(info, entity);
      return this.repository.save(info);
    }
  
    delete(id: number): Promise<DeleteResult> {
      return this.repository.softDelete(id);
    }
  }
  
