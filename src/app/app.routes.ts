import { Routes } from '@angular/router';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { SobremimComponent } from './paginas/sobremim/sobremim.component';
import { BotoxComponent } from './paginas/botox/botox.component';
import { BioestimuladorComponent } from './paginas/bioestimulador/bioestimulador.component';
import { LimpezaPeleComponent } from './paginas/limpeza-pele/limpeza-pele.component';
import { PreenchimentoComponent } from './paginas/preenchimento/preenchimento.component';
import { SobrancelhaComponent } from './paginas/sobrancelha/sobrancelha.component';
import { CiliosComponent } from './paginas/cilios/cilios.component';
import { OzonioterapiaComponent } from './paginas/ozonioterapia/ozonioterapia.component';

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
    path: 'botox',
    component: BotoxComponent,
  },
  {
    path: 'bioestimulador',
    component: BioestimuladorComponent,
  },
  {
    path: 'limpeza-de-pele',
    component: LimpezaPeleComponent,
  },
  {
    path: 'preenchimento',
    component: PreenchimentoComponent,
  },
  {
    path: 'sobrancelha',
    component: SobrancelhaComponent,
  },
  {
    path: 'cilios',
    component: CiliosComponent,
  },
  {
    path: 'ozonioterapia',
    component: OzonioterapiaComponent,
  },
  {
    path: '',
    redirectTo: '/principal',
    pathMatch: 'full',
  },
];
