import { Component } from '@angular/core';
import { CabecalhoComponent } from '../../componente/cabecalho/cabecalho.component';
import { IconebotaoComponent } from '../../componente/iconebotao/iconebotao.component';

@Component({
  selector: 'app-cilios',
  standalone: true,
  imports: [CabecalhoComponent, IconebotaoComponent],
  templateUrl: './cilios.component.html',
  styleUrl: './cilios.component.css',
})
export class CiliosComponent {}
