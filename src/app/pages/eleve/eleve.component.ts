import { ClasseService } from './../../services/classe.service';
import { Classe } from './../../models/classe';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  formGroup!: FormGroup;
  seletecdValid: boolean = true;
  selectedOption: any;
  constructor(private eleveService: EleveService,private classeService: ClasseService, private modalService: BsModalService, private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.getClasses()
    this.index()
    this.formGroup = this.fb.group({
      nom: ['',Validators.required ] ,
      prenom: ['',Validators.required ] ,
      genre: ['',Validators.required ] ,
      dateNaiss: ['',Validators.required ] ,
      lieuNaiss: ['',Validators.required ] ,
      classeSelected: ['',Validators.required ] ,
    })
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
      this.formGroup.setValue({
        nom: eleve.nom,
        prenom: eleve.prenom,
        genre: eleve.genre,
        dateNaiss: eleve.dateNaiss,
        lieuNaiss: eleve.lieuNaiss,
        classeSelected: eleve.classe.nom,
      });
      this.selectedOption = this.selectedEleve.classe;
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
  onSubmit(value: any) {
    this.seletecdValid = this.classeMatchValidator(this.formGroup)
    if(!this.seletecdValid) {
      return ;
    } else {
      this.selectedEleve.nom = value.nom;
      this.selectedEleve.prenom = value.prenom;
      this.selectedEleve.genre = value.genre;
      this.selectedEleve.dateNaiss =value.dateNaiss;
      this.selectedEleve.lieuNaiss =value.lieuNaiss;
      this.selectedEleve.classe = this.selectedOption;
      if(this.indexItem > -1) {
        this.eleves = this.eleveService.update(this.selectedEleve, this.indexItem)

      }else {
        const lastIndex= this.eleves.length - 1;
        this.eleves.length !=0 ? this.selectedEleve.id = this.eleves[lastIndex].id  +1 : this.selectedEleve.id = 1;
        this.eleves = this.eleveService.store(this.selectedEleve);
      }
      this.close()
    }
  }

  close() {
    this.formGroup.reset();
    this.selectedOption = null;
    this.indexItem = -1;
    this.selectedEleve= <Eleve>{}
    this.modalRef?.hide()
  }

  onSelect(event: TypeaheadMatch): void {
    this.selectedOption = event.item;
  }

  classeMatchValidator(g: FormGroup) {
    if(this.selectedOption.nom) {
      return g.get('classeSelected')?.value === this.selectedOption.nom
      ? true : false
    }else {
      return false
    }

  }

}
