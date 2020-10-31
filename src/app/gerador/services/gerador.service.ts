import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeradorService {
  numerosExcluir: number[] = [];
  numerosGerados: number[] = [];

  atualizarLista: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  incluirNumero(numero: number): void {
    this.numerosExcluir.push(numero);
  }

  limpar(): void {
    this.numerosExcluir = [];
    this.numerosGerados = [];
  }

  obterNumerosExcluir(): number[] {
    return this.numerosExcluir;
  }

  obterNumerosGerados(): number[] {
    return this.numerosGerados;
  }

  gerarNumeros(): void {
    let total = 0;
    while ( total <= 10000 ) {
      const encontrado = this.numerosExcluir.indexOf(total);
      if ( encontrado === -1 ) {
        this.numerosGerados.push(total);
      }
      total++;
    }
  }

}
