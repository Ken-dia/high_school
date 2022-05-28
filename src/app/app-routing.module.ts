import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EleveComponent } from './pages/eleve/eleve.component'
import { ClasseComponent } from './pages/classe/classe.component';

const routes: Routes = [
  { path: 'eleves', component: EleveComponent },
  { path: 'classes', component: ClasseComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
