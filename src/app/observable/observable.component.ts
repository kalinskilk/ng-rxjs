import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [AsyncPipe],
  template: ` <p>{{ observable | async }}</p> `,
  styleUrl: './observable.component.scss',
})
export class ObservableComponent {
  /**
   * Aqui criamos um observable.
   * Um observable representa a ideia de uma coleção invocável de valores ou eventos futuros.
   * Neste caso, emitimos o valor 'Hello World' e finalizamos o observable.
   */
  observable = new Observable((observer) => {
    observer.next('Hello World');
    observer.complete();
  });

  constructor() {
    /* aqui assinamos e imprimimos o valor quando emitido pelo observable. */
    this.observable.subscribe((value) => console.log(value));
  }
}
