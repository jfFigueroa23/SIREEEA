import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PerfilFinalInventarioDeFelder } from 'src/perfil_final_inventario_de_felder/perfil_final_inventario_de_felder.entity';
import { GenericEntity } from 'src/generic/generic.entity';
import { Grupos } from 'src/grupos/grupos.entity';

@Entity()
export class EstrategiaEnsenanza extends GenericEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column({type: 'text'})
  descripcion: string;

  //Relaciones con Perfil Final Inventario de Felder
  @OneToMany(() => PerfilFinalInventarioDeFelder, perfilfinal => perfilfinal.ee1)
  perfilesFinalesEE1: PerfilFinalInventarioDeFelder[];

  @OneToMany(() => PerfilFinalInventarioDeFelder, perfilfinal => perfilfinal.ee2)
  perfilesFinalesEE2: PerfilFinalInventarioDeFelder[];

  @OneToMany(() => PerfilFinalInventarioDeFelder, perfilfinal => perfilfinal.ee3)
  perfilesFinalesEE3: PerfilFinalInventarioDeFelder[];

  @OneToMany(() => PerfilFinalInventarioDeFelder, perfilfinal => perfilfinal.ee4)
  perfilesFinalesEE4: PerfilFinalInventarioDeFelder[];
  static createQueryBuilder: any;

  // Relaciones con Grupos
  @OneToMany(() => Grupos, perfilfinal => perfilfinal.ee1)
  perfilesGrupoEE1: Grupos[];

  @OneToMany(() => Grupos, perfilfinal => perfilfinal.ee2)
  perfilesGrupoEE2: Grupos[];

  @OneToMany(() => Grupos, perfilfinal => perfilfinal.ee3)
  perfilesGrupoEE3: Grupos[];

  @OneToMany(() => Grupos, perfilfinal => perfilfinal.ee4)
  perfilesGrupoEE4: Grupos[];
  static createQueryBuilderGrupo: any;
}
