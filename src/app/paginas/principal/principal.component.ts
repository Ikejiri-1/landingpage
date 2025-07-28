import { Component } from '@angular/core';
import { CabecalhoComponent } from '../../componente/cabecalho/cabecalho.component';
import { SeparadorComponent } from '../../componente/separador/separador.component';
import { ConsultaComponent } from '../../componente/consulta/consulta.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CabecalhoComponent, SeparadorComponent, ConsultaComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
})
export class PrincipalComponent {}
