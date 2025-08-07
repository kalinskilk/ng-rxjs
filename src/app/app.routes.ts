import { Routes } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { OfOperatorComponent } from './of-operator/of-operator.component';

export const routes: Routes = [
  {
    path: '',
    component: ObservableComponent,
  },
  {
    path: 'of-operator',
    component: OfOperatorComponent,
  },
];
