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
  _id: number;

  @Column("varchar", { name: "kurz", nullable: true, length: 255 })
  customerShortName: string | null;

  @Column("varchar", { name: "Bezeichnung", nullable: true, length: 255 })
  name: string | null;

  @Column("int", { name: "MTG_Kostenstelle", nullable: true })
  costcenter: number | null;

  @Column("tinyint", { name: "Erl", unsigned: true, default: () => "'0'" })
  jobDone: number;

  @Column("tinyint", { name: "Abgeschlossen", unsigned: true, default: () => "'0'", })
  orderCompleted: number;
 
}
