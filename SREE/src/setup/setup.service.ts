import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class DatabaseSetUp implements TypeOrmOptionsFactory {
    createTypeOrmOptions(): TypeOrmModuleOptions {
      return {
        type: 'mysql',
        host: '192.168.5.3',
        port: 3306,
        username: 'lruvalcaba',
        password: 'bulbasaur',
        database: 'pruebasGeo',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: false,
      };
    }
  }
