import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("au_auftrag", { schema: "mtg_datenbank" })
export class Salesorder {
  @PrimaryGeneratedColumn({ type: "int", name: "Auftrag" })
  Id: number;

  @Column("varchar", { name: "kurz", nullable: true, length: 255 })
  cutomerShortName: string | null;

  @Column("varchar", { name: "Bezeichnung", nullable: true, length: 255 })
  orderDescription: string | null;

  @Column("int", { name: "MTG_Kostenstelle", nullable: true })
  costCenterId: number | null;

  @Column("tinyint", { name: "Erl", unsigned: true, default: () => "'0'" })
  jobDone: number;

  @Column("tinyint", { name: "Abgeschlossen", unsigned: true, default: () => "'0'", })
  orderCompleted: number;
 
}
