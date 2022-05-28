import { Classe } from './../models/classe';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {
  classes: Classe[] = [
    {
      id: 1,
      nom: 'Borne S1'
    },
    {
      id: 2,
      nom: 'Borne S2'
    },
    {
      id:3,
      nom: 'Borne L1a'
    },
    {
      id:4,
      nom: 'Borne L2b'
    },
  ]
  constructor() { }
  index() {
    return this.classes;
  }
  show(id: number){
  const classe = this.classes.find(classe => classe.id === id)

  if(classe) {
    return classe;
  }
  else {
    throw new Error('FaceSnap not found!');
  }

  }
  store(classe: Classe) {
    this.classes.push(classe);
    return this.classes;
  }
  update (classe: Classe, index: number) {
    //const index = this.classes.indexOf(classe)
    this.classes[index] = classe;
    return this.classes;
  }
  delete (index: number) {
    this.classes.splice(index, 1);
    return this.classes;

  }
}
