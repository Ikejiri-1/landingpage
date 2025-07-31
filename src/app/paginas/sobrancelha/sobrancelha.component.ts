import { Component } from '@angular/core';
import { CabecalhoComponent } from '../../componente/cabecalho/cabecalho.component';
import { IconebotaoComponent } from '../../componente/iconebotao/iconebotao.component';

@Component({
  selector: 'app-sobrancelha',
  standalone: true,
  imports: [CabecalhoComponent, IconebotaoComponent],
  templateUrl: './sobrancelha.component.html',
  styleUrl: './sobrancelha.component.css',
})
export class SobrancelhaComponent {}
