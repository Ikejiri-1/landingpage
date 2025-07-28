import { Routes } from '@angular/router';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { SobremimComponent } from './paginas/sobremim/sobremim.component';

export const routes: Routes = [
  {
    path: 'principal',
    component: PrincipalComponent,
  },
  {
    path: 'sobre-mim',
    component: SobremimComponent,
  },
];
