import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeradorFormularioComponent } from './gerador-formulario/gerador-formulario.component';
import { GeradorListaComponent } from './gerador-lista/gerador-lista.component';
import { GeradorPaginaComponent } from './gerador-pagina/gerador-pagina.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GeradorFormularioComponent,
    GeradorListaComponent,
    GeradorPaginaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    GeradorPaginaComponent
  ]
})
export class GeradorModule { }
