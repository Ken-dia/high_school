import { Classe } from './classe';
export class Eleve {
  id!: number;
  nom!: string;
  prenom!: string;
  genre!: string;
  dateNaiss!: string;
  lieuNaiss!: string;
  classe!: Classe;

  /* constructor(classe: Classe) {
    this.classe = classe
  } */
}
