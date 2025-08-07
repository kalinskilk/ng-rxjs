import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { delay, map, Observable, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-switch-map-operator',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `<div class="container">
    <h2>Buscar Usuário</h2>

    <input
      type="text"
      [formControl]="searchInput"
      placeholder="Digite para buscar..."
      class="form-control"
    />

    <ul *ngIf="results?.length" class="list-group mt-3">
      <li *ngFor="let item of results" class="list-group-item">
        {{ item }}
      </li>
    </ul>

    <p *ngIf="results?.length === 0">Nenhum resultado encontrado.</p>
  </div>`,
  styleUrl: './switch-map-operator.component.scss',
})
export class SwitchMapOperatorComponent {
  searchInput = new FormControl('');
  results: string[] = ['salad', 'salmon', 'sushi', 'pizza'];
  list$ = of(['salad', 'salmon', 'sushi', 'pizza']);

  constructor() {
    this.searchInput.valueChanges
      .pipe(
        tap((value) => console.log(value)),
        /* 
        O operador switch map, retorna somente o observable mais recente.
        Quando o observable emitir um novo valor, ele cancela o observable anterior e inicia um novo.
        Neste exemplo temos uma pesquisa, e quando o usuário digitar, ele cancela a pesquisa anterior e inicia uma nova.
        */
        switchMap((term) => {
          return this.searchFood(term || '');
        })
      )
      .subscribe((data: any[]) => {
        this.results = data;
      });
  }

  searchFood(term: string): Observable<string[]> {
    return this.list$.pipe(
      map((foods) => foods.filter((food) => food.includes(term))),
      delay(1000)
    );
  }
}
