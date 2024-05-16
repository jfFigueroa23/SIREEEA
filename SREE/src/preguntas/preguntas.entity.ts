import { GenericEntity } from 'src/generic/generic.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Cuestionarios } from '../cuestionarios/cuestionarios.entity';

@Entity()
export class Preguntas extends GenericEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  id_cuestionario: number;

  @ManyToOne(() => Cuestionarios, cuestionario => cuestionario.preguntas)
  @JoinColumn({ name: 'id_cuestionario', referencedColumnName: 'id_cuestionario' })
  cuestionario: Cuestionarios;

  @Column({ type: 'int' })
  num_pregunta: number;

  @Column({ type: 'varchar' })
  pregunta: string;

  @Column({ type: 'varchar' })
  respuesta_1: string;

  @Column({ type: 'varchar' })
  respuesta_2: string;
}
