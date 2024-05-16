import { GenericEntity } from 'src/generic/generic.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class InventarioDeFelder extends GenericEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  nro_cuenta: number;

  @Column({ type: 'varchar' })
  respuestas_compactadas: string;

  @Column({ type: 'int' })
  grupo: number;
}