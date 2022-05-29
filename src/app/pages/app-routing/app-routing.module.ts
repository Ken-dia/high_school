import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EleveComponent } from '../eleve/eleve.component';
import { ClasseComponent } from '../classe/classe.component';
const routes: Routes = [
  {
     path: 'eleves', component: EleveComponent ,
  },
  {
    path: 'classes', component: ClasseComponent ,
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
