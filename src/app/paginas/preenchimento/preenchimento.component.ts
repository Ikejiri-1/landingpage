import { Component } from '@angular/core';
import { CabecalhoComponent } from '../../componente/cabecalho/cabecalho.component';

@Component({
  selector: 'app-preenchimento',
  standalone: true,
  imports: [CabecalhoComponent],
  templateUrl: './preenchimento.component.html',
  styleUrl: './preenchimento.component.css',
})
export class PreenchimentoComponent {}
