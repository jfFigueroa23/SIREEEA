import {
    CreateDateColumn,
    DeleteDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  export abstract class GenericEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @CreateDateColumn()
    created: Date;
  
    @DeleteDateColumn()
    deleted: Date;
  
    @UpdateDateColumn()
    update: Date;
  }
  
