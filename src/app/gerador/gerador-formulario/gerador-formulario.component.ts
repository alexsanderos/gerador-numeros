import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeradorService } from '../services/gerador.service';

@Component({
  selector: 'app-gerador-formulario',
  templateUrl: './gerador-formulario.component.html',
  styleUrls: ['./gerador-formulario.component.css']
})
export class GeradorFormularioComponent implements OnInit {
  public formIncluir: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private geradorService: GeradorService
  ) {
    this.formIncluir = this.formBuilder.group({
      numero: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  salvar(event): void {
    this.geradorService.incluirNumero(Number(this.formIncluir.get('numero').value));
    this.geradorService.atualizarLista.emit(true);
    this.formIncluir.reset();
    event.stopPropagation();
  }

  limpar(event): void {
    this.geradorService.limpar();
    this.geradorService.atualizarLista.emit(true);
    this.formIncluir.reset();
    event.stopPropagation();
  }

  gerarNumeros(event): void {
    this.geradorService.gerarNumeros();
    this.geradorService.atualizarLista.emit(true);
    this.formIncluir.reset();
    event.stopPropagation();
  }

}
