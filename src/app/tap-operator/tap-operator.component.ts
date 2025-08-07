import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { map, of, tap } from 'rxjs';

@Component({
  selector: 'app-tap-operator',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>{{ tapObservable | async }}</p>
    <br />
    <p>{{ tapObservableObj | async | json }}</p>
  `,
  styleUrl: './tap-operator.component.scss',
})
export class TapOperatorComponent {
  loading = false;
  /**
   * O operador tap permite executar ações colaterais em um observable.
   * Ele **não modifica os valores emitidos** – a menos que sejam objetos,
   * pois objetos são passados por referência e podem ser alterados diretamente.
   * Usado com frequência para debug, logs, atualizar variáveis externas (ex: loading).
   */
  tapObservable = of('Tap operator').pipe(
    /* aqui modificamos o valor de loading */
    tap((value) => {
      console.log('Before: ', value);
      this.loading = true; // aqui o tap modifica o valor, pq é externo
    }),
    map((value) => value.toUpperCase()),
    /* aqui modificamos o valor de loading */
    tap((value) => {
      console.log('After: ', value);
      console.log(this.loading);
    })
  );

  tapObservableObj = of({ name: 'Tap operator' }).pipe(
    tap((value) => console.log(value)),
    /*  As ações no operador tap não modificam os valores emitidos.
    Exceto em objetos, que por causa da referencia se modificam. 
    Aqui no exemplo modificamos o valor de name transformando em maiusculo,
    esta modificação ocorre no proprio objeto emitido */

    tap((value) => (value.name = value.name.toUpperCase()))
  );
}
