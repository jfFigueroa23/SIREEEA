import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Index } from 'typeorm';
import { Grupos } from '../grupos/grupos.entity';
import { GenericEntity } from 'src/generic/generic.entity';

@Entity()
export class Carreras extends GenericEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Index() // Agregar el índice en la columna
  @Column({ type: 'varchar', length: 3 })
  id_carrera: string;

  @Column({ type: 'varchar' })
  nombre: string;

  // Relación con la entidad Grupos
  @OneToMany(() => Grupos, grupo => grupo.carrera)
  grupos: Grupos[];
}