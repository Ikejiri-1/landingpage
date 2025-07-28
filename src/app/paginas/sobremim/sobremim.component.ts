import { Component } from '@angular/core';
import { CabecalhoComponent } from '../../componente/cabecalho/cabecalho.component';

@Component({
  selector: 'app-sobremim',
  standalone: true,
  imports: [CabecalhoComponent],
  templateUrl: './sobremim.component.html',
  styleUrl: './sobremim.component.css',
})
export class SobremimComponent {}
