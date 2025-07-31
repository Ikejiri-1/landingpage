import { Component } from '@angular/core';
import { CabecalhoComponent } from '../../componente/cabecalho/cabecalho.component';
import { IconebotaoComponent } from '../../componente/iconebotao/iconebotao.component';

@Component({
  selector: 'app-limpeza-pele',
  standalone: true,
  imports: [CabecalhoComponent, IconebotaoComponent],
  templateUrl: './limpeza-pele.component.html',
  styleUrl: './limpeza-pele.component.css',
})
export class LimpezaPeleComponent {}
