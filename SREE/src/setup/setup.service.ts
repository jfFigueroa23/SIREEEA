import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class DatabaseSetUp implements TypeOrmOptionsFactory {
    createTypeOrmOptions(): TypeOrmModuleOptions {
      return {
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'bd_sireeea_test',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      };
    }
  }
