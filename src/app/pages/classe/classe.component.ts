import { Classe } from './../../models/classe';
import { ClasseService } from './../../services/classe.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.scss']
})
export class ClasseComponent implements OnInit {
  classes: Classe[] = []
  public formTitle: string = 'Ajouter une classe';
  public btnTitle = 'Ajouter';
  public index: number = -1;
  public showError: boolean = false;
  modalRef?: BsModalRef;
  public selectedClasse =  <Classe>{};
  public nom = new FormControl('', Validators.required);
  public search: string = '';

  constructor(private classeService:ClasseService, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getAll();
  }
  openModal(template: TemplateRef<any>, classe: Classe ) {
    this.modalRef = this.modalService.show(template);
    if(classe.id) {
      this.formTitle = 'Modier une Classe';
      this.btnTitle = 'Modifier';
      this.selectedClasse = classe;
      this.index = this.classes.indexOf(classe);
      this.nom.setValue(this.selectedClasse.nom)
    }

  }
  getAll() {
    this.classes = this.classeService.index();
    console.log(this.classes);
  }
  save() {
    this.selectedClasse.nom = this.nom.value;
    if(!this.nom.value) {
      this.showError = true;
      return;
    }
    if(this.index > -1) {
      this.classes= this.classeService.update(this.selectedClasse, this.index);
      this.modalRef?.hide();
      this.index = -1;
    } else {
      const lastIndex= this.classes.length - 1;
      this.selectedClasse.id = this.classes[lastIndex].id +1;
      this.classes = this.classeService.store(this.selectedClasse)
    }
    this.close()
  }
  delete(classe: Classe) {
    this.index = this.classes.indexOf(classe);
    this.classes = this.classeService.delete(this.index);
    this.index = -1
  }
  close() {
    this.nom.reset()
    this.index = -1;
    this.modalRef?.hide();
    this.selectedClasse = <Classe>{}
  }

}
