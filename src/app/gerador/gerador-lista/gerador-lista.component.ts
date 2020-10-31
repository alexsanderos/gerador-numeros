import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GeradorService } from '../services/gerador.service';

@Component({
  selector: 'app-gerador-lista',
  templateUrl: './gerador-lista.component.html',
  styleUrls: ['./gerador-lista.component.css']
})
export class GeradorListaComponent implements OnInit {
  numerosGerados: number[] = [];
  numerosExcluir: number[] = [];
  servicoAtualizarListaSubscription: Subscription;
  constructor(
    private geradorService: GeradorService
    ) { }

  ngOnInit(): void {
    this.obterNumerosExcluir();
    this.obterNumerosGerados();
    this.servicoAtualizarListaSubscription = this.geradorService.atualizarLista
      .subscribe((res) => {
        if ( res ) {
          this.obterNumerosExcluir();
          this.obterNumerosGerados();
        }
    });
  }

  obterNumerosExcluir(): void {
    this.numerosExcluir = this.geradorService.obterNumerosExcluir();
  }

  obterNumerosGerados(): void {
    this.numerosGerados = this.geradorService.obterNumerosGerados();
  }

}
