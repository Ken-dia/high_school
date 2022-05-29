
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EleveComponent } from './pages/eleve/eleve.component'
import { ClasseComponent } from './pages/classe/classe.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full',redirectTo:'eleves' },
  { path: 'eleves', component: EleveComponent },
  { path: 'classes', component: ClasseComponent },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
