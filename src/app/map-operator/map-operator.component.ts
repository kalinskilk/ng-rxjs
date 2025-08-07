import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-map-operator',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h5>mapObservable</h5>
    <p>{{ mapObservable | async }}</p>

    <br />
    <h5>personObservable</h5>
    <p *ngIf="personObservable | async as person">
      {{ person.name }}
      {{ person.age }}
      {{ person.teen }}
    </p>
    <br />
    <h5>personsObservable</h5>
    <p *ngFor="let person of personsObservable | async">
      {{ person.name }}
      {{ person.age }}
      {{ person.teen }}
    </p>
  `,
  styleUrl: './map-operator.component.scss',
})
export class MapOperatorComponent {
  /**
   * Aqui criamos um observable com o of operator e aplicamos o map operator.
   * O map operator, funciona quase como o map do javascript, em que ele mapeia o observable  retorna um novo dado.
   * No caso em questao, emitimos um valor numerico 2 e muliplicamos ele por 2
   */
  mapObservable = of(2).pipe(map((val) => val * 2));

  /**
   * Aqui criamos um observable com o of operator e aplicamos o map operator.
   * No caso em questao, emitimos o objeto { age: 20, name: 'John doe' }
   * e mapeamos ele para um novo objeto { age: 20, name: 'John doe', teen: 'Is teen' }
   */
  personObservable = of({ age: 20, name: 'John doe' }).pipe(
    map((val) => ({
      age: val.age,
      name: val.name,
      teen: val.age < 18 ? 'Is teen' : 'Is adult',
    }))
  );

  /**
   * Aqui criamos um observable com o of operator e aplicamos o map operator.
   * No caso em questao, emitimos o array [{ age: 20, name: 'John doe' }, { age: 16, name: 'Jany doe' }]
   * e mapeamos ele para um novo array [{ age: 20, name: 'John doe', teen: 'Is teen' }, { age: 16, name: 'Jany doe', teen: 'Is teen' }]
   */
  personsObservable = of([
    { age: 20, name: 'John doe' },
    { age: 16, name: 'Jany doe' },
  ]).pipe(
    map((people) =>
      people.map((person) => ({
        ...person,
        teen: person.age < 18 ? 'Is teen' : 'Is adult',
      }))
    )
  );

  constructor() {
    /* Aqui assinamos e imprimimos o valor quando emitido pelo observable. */
    this.mapObservable.subscribe((value) => console.log(value));

    /* Aqui assinamos e imprimimos o valor quando emitido pelo observable. */
    this.personObservable.subscribe((value) => console.log(value));

    /* Aqui assinamos e imprimimos o valor quando emitido pelo observable. */
    this.personsObservable.subscribe((value) => console.log(value));
  }
}
