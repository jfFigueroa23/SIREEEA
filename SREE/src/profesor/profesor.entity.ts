import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm';
import { GenericEntity } from 'src/generic/generic.entity';
import { PerfilFinalInventarioDeFelder } from 'src/perfil_final_inventario_de_felder/perfil_final_inventario_de_felder.entity';
import { Exclude } from 'class-transformer';

@Entity()
export class Profesor extends GenericEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_profesor: number;

  @Column()
  nombre_profesor: string;

  @Column()
  nro_empleado: number;

  @Exclude()
  @Column()
  contra: string;

  @Column({nullable:true})
  estrategia_preferida: string;

  @Column()
  grupo: number;

  @Column()
  carrera: string;

  // Relación con la entidad Perfilfinal
  @OneToMany(() => PerfilFinalInventarioDeFelder, perfilfinal => perfilfinal.profesor)
  @JoinColumn({ name: 'grupo', referencedColumnName: 'grupo' })
  perfilesFinales: PerfilFinalInventarioDeFelder[];
}
