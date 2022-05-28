import { ClasseService } from './../../services/classe.service';
import { Classe } from './../../models/classe';
import { FormControl, Validators } from '@angular/forms';
import { EleveService } from './../../services/eleve.service';
import { Eleve } from './../../models/eleve';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';

@Component({
  selector: 'app-eleve',
  templateUrl: './eleve.component.html',
  styleUrls: ['./eleve.component.scss']
})
export class EleveComponent implements OnInit {
  public eleves: Eleve[] = []
  public classes: Classe[] = []
  public indexItem: number = -1;
  public showError: boolean = false;
  modalRef?: BsModalRef;
  public selectedEleve =  <Eleve>{};
  public formTitle: string = 'Ajouter une élève';
  public btnTitle = 'Ajouter';
  public nom = new FormControl('', Validators.required);
  public prenom = new FormControl('', Validators.required);
  public genre = new FormControl('', Validators.required);
  public dateNaiss = new FormControl('', Validators.required);
  public lieuNaiss = new FormControl('', Validators.required);
  selectedValue?: string;
  selectedOption: any;
  noResult = false;
  constructor(private eleveService: EleveService,private classeService: ClasseService, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getClasses()
    this.index()
  }
  typeaheadNoResults(event: boolean): void {
    this.noResult = event;
  }
  getClasses() {
    this.classes = this.classeService.index()
  }
  openModal(template: TemplateRef<any>, eleve: Eleve ) {
    this.modalRef = this.modalService.show(template);
    if(eleve.id) {
      this.formTitle = 'Modier une Classe';
      this.btnTitle = 'Modifier';
      this.selectedEleve = eleve;
      this.indexItem = this.eleves.indexOf(eleve);
      this.nom.setValue(this.selectedEleve.nom);
      this.prenom.setValue(this.selectedEleve.prenom);
      this.genre.setValue(this.selectedEleve.genre);
      this.dateNaiss.setValue(this.selectedEleve.dateNaiss);
      this.lieuNaiss.setValue(this.selectedEleve.lieuNaiss);
      this.selectedValue = this.selectedEleve.classe.nom;
      this.selectedOption = this.selectedEleve.classe;
      //this.classe_id.setValue(this.selectedEleve.classe.id)
    }

  }
  index() {
    this.eleves = this.eleveService.index()
  }

  delete(eleve: Eleve) {
    this.indexItem = this.eleves.indexOf(eleve)
    this.eleves = this.eleveService.delete(this.indexItem)
    this.indexItem = -1;
  }
  save() {
    this.selectedEleve.nom = this.nom.value;
    this.selectedEleve.prenom = this.prenom.value;
    this.selectedEleve.genre = this.genre.value;
    this.selectedEleve.dateNaiss = this.dateNaiss.value;
    this.selectedEleve.lieuNaiss = this.lieuNaiss.value;
    this.selectedEleve.classe = this.selectedOption;
    if(this.indexItem > -1) {
      this.eleves = this.eleveService.update(this.selectedEleve, this.indexItem)
      this.close()
    }else {
      const lastIndex= this.eleves.length - 1;
      this.eleves.length !=0 ? this.selectedEleve.id = this.eleves[lastIndex].id  +1 : this.selectedEleve.id = 1;
      this.eleves = this.eleveService.store(this.selectedEleve);
      this.close()
    }

  }
  close() {
    this.nom.reset()
    this.indexItem = -1;
    this.selectedEleve= <Eleve>{}
    this.modalRef?.hide()
  }
  onSelect(event: TypeaheadMatch): void {
    this.selectedOption = event.item;
  }


}
