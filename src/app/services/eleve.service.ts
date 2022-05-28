import { Eleve } from './../models/eleve';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EleveService {
  eleves: Eleve[] = []
  constructor() { }
  index():Eleve[] {
    return this.eleves;
  }
  show(id: number){
  const eleve = this.eleves.find(eleve => eleve.id === id)

  if(eleve) {
    return eleve;
  }
  else {
    throw new Error('FaceSnap not found!');
  }

  }
  store(eleve: Eleve) {

    this.eleves.push(eleve);
    return this.eleves;
  }
  update (eleve: Eleve, index: number) {
    this.eleves[index] = eleve;
    return this.eleves;
  }
  delete (index: number) {
    this.eleves.splice(index, 1);
    return this.eleves;

  }

}
