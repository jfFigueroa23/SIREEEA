import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Profesor } from 'src/profesor/profesor.entity';
import { GenericEntity } from 'src/generic/generic.entity';

@Entity()
export class Materia extends GenericEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_profesor: string;

  @Column()
  nombre: string;

}
