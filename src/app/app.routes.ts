import { Routes } from '@angular/router';
import { PrincipalComponent } from './paginas/sobremim/principal/principal.component';
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
  {
    path: '',
    redirectTo: '/principal',
    pathMatch: 'full',
  },
];
