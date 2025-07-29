import { Component } from '@angular/core';
import { CabecalhoComponent } from '../../componente/cabecalho/cabecalho.component';
import { RodapeComponent } from '../../componente/rodape/rodape.component';
import { SeparadorComponent } from '../../componente/separador/separador.component';

@Component({
  selector: 'app-sobremim',
  standalone: true,
  imports: [CabecalhoComponent, RodapeComponent, SeparadorComponent],
  templateUrl: './sobremim.component.html',
  styleUrl: './sobremim.component.css',
})
export class SobremimComponent {}
