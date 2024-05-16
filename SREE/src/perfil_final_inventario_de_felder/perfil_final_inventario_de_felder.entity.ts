import { Entity, Column, PrimaryGeneratedColumn, Index, ManyToOne, JoinColumn } from 'typeorm';
import { GenericEntity } from 'src/generic/generic.entity';
import { Profesor } from 'src/profesor/profesor.entity';
import { EstrategiaEnsenanza } from 'src/estrategias_enseñanza/estrategias_enseñanza.entity';

@Entity()
export class PerfilFinalInventarioDeFelder extends GenericEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  nro_cuenta: number;

  @Index()
  @Column({ type: 'int' })
  grupo: number;

  @Column({ type: 'varchar' })
  activo_reflexivo: string;

  @Column({ type: 'varchar' })
  sensorial_intuitivo: string;

  @Column({ type: 'varchar' })
  visual_verbal: string;

  @Column({ type: 'varchar' })
  secuencial_global: string;

  @ManyToOne(() => EstrategiaEnsenanza, { eager: true })
  @JoinColumn({ name: 'ee1', referencedColumnName: 'id' })
  ee1: Partial<EstrategiaEnsenanza>; // Utilizamos Partial para indicar que solo necesitamos algunos campos de la entidad

  @ManyToOne(() => EstrategiaEnsenanza, { eager: true })
  @JoinColumn({ name: 'ee2', referencedColumnName: 'id' })
  ee2: Partial<EstrategiaEnsenanza>;

  @ManyToOne(() => EstrategiaEnsenanza, { eager: true })
  @JoinColumn({ name: 'ee3', referencedColumnName: 'id' })
  ee3: Partial<EstrategiaEnsenanza>;

  @ManyToOne(() => EstrategiaEnsenanza, { eager: true })
  @JoinColumn({ name: 'ee4', referencedColumnName: 'id' })
  ee4: Partial<EstrategiaEnsenanza>;

  @ManyToOne(() => Profesor, profesor => profesor.perfilesFinales)
  profesor: Profesor;
}
