import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormEleveComponent } from './shared/form-eleve/form-eleve.component';
import { FormClasseComponent } from './shared/form-classe/form-classe.component';
import { EleveComponent } from './pages/eleve/eleve.component';
import { ClasseComponent } from './pages/classe/classe.component';
import { DrawerComponent } from './pages/drawer/drawer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MenuComponent } from './shared/components/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    FormEleveComponent,
    FormClasseComponent,
    EleveComponent,
    ClasseComponent,
    DrawerComponent,
    NotFoundComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    TypeaheadModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
