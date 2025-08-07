import { Routes } from '@angular/router';
import { FirstOperatorComponent } from './first-operator/first-operator.component';
import { MapOperatorComponent } from './map-operator/map-operator.component';
import { ObservableComponent } from './observable/observable.component';
import { OfOperatorComponent } from './of-operator/of-operator.component';
import { SwitchMapOperatorComponent } from './switch-map-operator/switch-map-operator.component';
import { TapOperatorComponent } from './tap-operator/tap-operator.component';

export const routes: Routes = [
  {
    path: '',
    component: ObservableComponent,
  },
  {
    path: 'of-operator',
    component: OfOperatorComponent,
  },
  {
    path: 'map-operator',
    component: MapOperatorComponent,
  },
  {
    path: 'first-operator',
    component: FirstOperatorComponent,
  },
  {
    path: 'tap-operator',
    component: TapOperatorComponent,
  },
  {
    path: 'switch-map-operator',
    component: SwitchMapOperatorComponent,
  },
];
