import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
// import { AuMtgKostenstelle } from "./AuMtgKostenstelle";
// import { AuAuftragPosition } from "./AuAuftragPosition";
// import { AuRechnung } from "./AuRechnung";
// import { BeBestellung } from "./BeBestellung";
// import { BeBestellungPosition } from "./BeBestellungPosition";
// import { BeBestellvorschlag } from "./BeBestellvorschlag";
// import { TeGeraetSeriennummer } from "./TeGeraetSeriennummer";
// import { TeLagerbewegung } from "./TeLagerbewegung";

// @Index("MTG_Kostenstelle", ["mtgKostenstelle"], {})
@Entity("au_auftrag", { schema: "mtg_datenbank" })
export class Salesorder {
  @PrimaryGeneratedColumn({ type: "int", name: "Auftrag" })
  salesOrderId: number;

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


  // @Column("date", { name: "datum", nullable: true })
  // datum: string | null;

  // @Column("int", { name: "Kdnr", nullable: true })
  // kdnr: number | null;

  // @Column()
  // Art: string | null;

  // @Column("int", { name: "MD_Auftrag", nullable: true })
  // mdAuftrag: number | null;

  // @Column("varchar", { name: "Kostenstelle", nullable: true, length: 255 })
  // kostenstelle: string | null;

  // @Column("varchar", {
  //   name: "Ansprechpartner_Kunde",
  //   nullable: true,
  //   length: 255,
  // })
  // ansprechpartnerKunde: string | null;



  // @Column("varchar", {
  //   name: "Liefertermin gewünscht",
  //   nullable: true,
  //   length: 255,
  // })
  // lieferterminGewNscht: string | null;

  // @Column("varchar", {
  //   name: "Liefertermin bestätigt",
  //   nullable: true,
  //   length: 255,
  // })
  // lieferterminBestTigt: string | null;

  // @Column("varchar", { name: "Bestellnummer", nullable: true, length: 255 })
  // bestellnummer: string | null;

  // @Column("varchar", { name: "TRG", nullable: true, length: 255 })
  // trg: string | null;



  // @Column("double", { name: "RG", nullable: true, precision: 22 })
  // rg: number | null;



  // @Column("decimal", { name: "Wert", nullable: true, precision: 10, scale: 2 })
  // wert: string | null;

  // @Column("decimal", {
  //   name: "Arbeitskosten",
  //   nullable: true,
  //   precision: 10,
  //   scale: 2,
  // })
  // arbeitskosten: string | null;

  // @Column("decimal", {
  //   name: "Materialkosten",
  //   nullable: true,
  //   precision: 10,
  //   scale: 2,
  // })
  // materialkosten: string | null;

  // @Column("decimal", {
  //   name: "SonstigeKosten",
  //   nullable: true,
  //   precision: 15,
  //   scale: 2,
  // })
  // sonstigeKosten: string | null;

  // @Column("decimal", {
  //   name: "Lagerentnahme",
  //   nullable: true,
  //   precision: 10,
  //   scale: 2,
  // })
  // lagerentnahme: string | null;

  // @Column("varchar", { name: "Berechnung", nullable: true, length: 255 })
  // berechnung: string | null;

  // @Column("longtext", { name: "Bemerkung", nullable: true })
  // bemerkung: string | null;

  // @Column("varchar", { name: "Zeichen", nullable: true, length: 255 })
  // zeichen: string | null;

  // @Column("varchar", { name: "Bearbeiter", nullable: true, length: 255 })
  // bearbeiter: string | null;

  // @Column("double", { name: "MwSt", nullable: true, precision: 22 })
  // mwSt: number | null;

  // @Column("varchar", { name: "Name", nullable: true, length: 255 })
  // name: string | null;

  // @Column("varchar", { name: "Zusatz", nullable: true, length: 255 })
  // zusatz: string | null;

  // @Column("varchar", { name: "Straße", nullable: true, length: 255 })
  // straE: string | null;

  // @Column("varchar", { name: "PLZ", nullable: true, length: 255 })
  // plz: string | null;

  // @Column("varchar", { name: "Ort", nullable: true, length: 255 })
  // ort: string | null;

  // @Column("varchar", { name: "Land", nullable: true, length: 255 })
  // land: string | null;

  // @Column("varchar", { name: "Telefon", nullable: true, length: 255 })
  // telefon: string | null;

  // @Column("varchar", { name: "Telefax", nullable: true, length: 255 })
  // telefax: string | null;

  // @Column("varchar", { name: "Email", nullable: true, length: 255 })
  // email: string | null;

  // @Column("varchar", { name: "Rabattbezeichnung", nullable: true, length: 255 })
  // rabattbezeichnung: string | null;

  // @Column("double", {
  //   name: "RabattAuftrag",
  //   nullable: true,
  //   precision: 22,
  //   default: () => "'0'",
  // })
  // rabattAuftrag: number | null;

  // @Column("varchar", { name: "Zahlung1", nullable: true, length: 255 })
  // zahlung1: string | null;

  // @Column("double", { name: "Tage1", nullable: true, precision: 22 })
  // tage1: number | null;

  // @Column("double", { name: "Prozent1", nullable: true, precision: 22 })
  // prozent1: number | null;

  // @Column("varchar", { name: "Zahlung2", nullable: true, length: 255 })
  // zahlung2: string | null;

  // @Column("double", { name: "Tage2", nullable: true, precision: 22 })
  // tage2: number | null;

  // @Column("double", { name: "Prozent2", nullable: true, precision: 22 })
  // prozent2: number | null;

  // @Column("double", { name: "LieferscheinNr", nullable: true, precision: 22 })
  // lieferscheinNr: number | null;

  // @Column("varchar", { name: "L_Name", nullable: true, length: 255 })
  // lName: string | null;

  // @Column("varchar", { name: "L_Zusatz", nullable: true, length: 255 })
  // lZusatz: string | null;

  // @Column("varchar", { name: "L_Straße", nullable: true, length: 255 })
  // lStraE: string | null;

  // @Column("varchar", { name: "L_PLZ", nullable: true, length: 255 })
  // lPlz: string | null;

  // @Column("varchar", { name: "L_Ort", nullable: true, length: 255 })
  // lOrt: string | null;

  // @Column("varchar", { name: "L_Land", nullable: true, length: 255 })
  // lLand: string | null;

  // @Column("varchar", { name: "L_Telefon", nullable: true, length: 255 })
  // lTelefon: string | null;

  // @Column("varchar", { name: "L_Telefax", nullable: true, length: 255 })
  // lTelefax: string | null;

  // @Column("longtext", { name: "Bemerkungintern", nullable: true })
  // bemerkungintern: string | null;

  // @Column("tinyint", {
  //   name: "Überwachen",
  //   unsigned: true,
  //   default: () => "'0'",
  // })
  // berwachen: number;

  // @Column("longtext", { name: "Aufgaben", nullable: true })
  // aufgaben: string | null;

  // @Column("int", { name: "MonteurNr", nullable: true, unsigned: true })
  // monteurNr: number | null;

  // @Column("int", { name: "WartungsvertragNr", nullable: true })
  // wartungsvertragNr: number | null;

  // @ManyToOne(
  //   () => AuMtgKostenstelle,
  //   (auMtgKostenstelle) => auMtgKostenstelle.auAuftrags,
  //   { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  // )
  // @JoinColumn([
  //   { name: "MTG_Kostenstelle", referencedColumnName: "kostenstelle" },
  // ])
  // mtgKostenstelle2: AuMtgKostenstelle;

  // @OneToMany(
  //   () => AuAuftragPosition,
  //   (auAuftragPosition) => auAuftragPosition.auftrag2
  // )
  // auAuftragPositions: AuAuftragPosition[];

  // @OneToMany(() => AuRechnung, (auRechnung) => auRechnung.auftrag2)
  // auRechnungs: AuRechnung[];

  // @OneToMany(() => BeBestellung, (beBestellung) => beBestellung.auftrag2)
  // beBestellungs: BeBestellung[];

  // @OneToMany(
  //   () => BeBestellungPosition,
  //   (beBestellungPosition) => beBestellungPosition.auftrag2
  // )
  // beBestellungPositions: BeBestellungPosition[];

  // @OneToMany(
  //   () => BeBestellvorschlag,
  //   (beBestellvorschlag) => beBestellvorschlag.auftrag2
  // )
  // beBestellvorschlags: BeBestellvorschlag[];

  // @OneToMany(
  //   () => TeGeraetSeriennummer,
  //   (teGeraetSeriennummer) => teGeraetSeriennummer.auftrag
  // )
  // teGeraetSeriennummers: TeGeraetSeriennummer[];

  // @OneToMany(
  //   () => TeLagerbewegung,
  //   (teLagerbewegung) => teLagerbewegung.auftrag2
  // )
  // teLagerbewegungs: TeLagerbewegung[];
}
