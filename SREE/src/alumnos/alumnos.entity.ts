import { GenericEntity } from 'src/generic/generic.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Alumnos extends GenericEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  nro_cuenta: number;

  @Column({ type: 'varchar' })
  contraseña: string;

  @Column({ type: 'varchar' })
  nombre: string;

  @Column({ type: 'varchar' })
  apellido_1: string;

  @Column({ type: 'varchar' })
  apellido_2: string;

  @Column({ type: 'date' })
  fecha_nacimiento: Date;

  @Column({ type: 'int' })
  grupo: number;
}
