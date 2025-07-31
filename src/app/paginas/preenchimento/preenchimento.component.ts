import { Component } from '@angular/core';
import { CabecalhoComponent } from '../../componente/cabecalho/cabecalho.component';
import { IconebotaoComponent } from '../../componente/iconebotao/iconebotao.component';

@Component({
  selector: 'app-preenchimento',
  standalone: true,
  imports: [CabecalhoComponent, IconebotaoComponent],
  templateUrl: './preenchimento.component.html',
  styleUrl: './preenchimento.component.css',
})
export class PreenchimentoComponent {}
