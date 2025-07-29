import { Component } from '@angular/core';
import { CabecalhoComponent } from '../../componente/cabecalho/cabecalho.component';
import { SeparadorComponent } from '../../componente/separador/separador.component';
import { ConsultaComponent } from '../../componente/consulta/consulta.component';
import { RodapeComponent } from '../../componente/rodape/rodape.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [
    CabecalhoComponent,
    RodapeComponent,
    SeparadorComponent,
    ConsultaComponent,
  ],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
})
export class PrincipalComponent {}
