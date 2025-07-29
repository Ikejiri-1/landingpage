import { Component } from '@angular/core';
import { CabecalhoComponent } from '../../componente/cabecalho/cabecalho.component';

@Component({
  selector: 'app-cilios',
  standalone: true,
  imports: [CabecalhoComponent],
  templateUrl: './cilios.component.html',
  styleUrl: './cilios.component.css',
})
export class CiliosComponent {}
