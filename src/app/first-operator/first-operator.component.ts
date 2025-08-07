import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { first, of } from 'rxjs';

@Component({
  selector: 'app-first-operator',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>{{ firstObservable | async }}</p> `,
  styleUrl: './first-operator.component.scss',
})
export class FirstOperatorComponent {
  /**
   * Criamos aqui um observable com o operador first
   * O operador first retorna o primeiro valor emitido pelo observable.
   * No nosso caso sera o valor "First"
   */
  firstObservable = of('First', 'Second', 'Third').pipe(first());

  constructor() {
    /* Aqui assinamos e imprimimos o valor quando emitido pelo observable. */
    this.firstObservable.subscribe((value) => console.log(value));
  }
}
