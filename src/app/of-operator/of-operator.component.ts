import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of-operator',
  standalone: true,
  imports: [AsyncPipe],
  template: ` <p>{{ messageObservable | async }}</p> `,
  styleUrl: './of-operator.component.scss',
})
export class OfOperatorComponent {
  /**
   * Exemplo de uso do operador of
   * Criamos um observable que envia a string "Of operator".
   * O operator "of" Converte os argumentos em uma sequência observável.
   * Vale destacar que o operador of é sincrono, ou seja, os valores são emitidos imediatamente no momento da inscrição
   */
  messageObservable = of('Of operator');

  constructor() {
    /* Aqui assinamos e imprimimos o valor quando emitido pelo observable. */
    this.messageObservable.subscribe((value) => console.log(value));
  }
}
