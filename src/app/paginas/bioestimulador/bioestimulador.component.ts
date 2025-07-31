import { Component } from '@angular/core';
import { CabecalhoComponent } from '../../componente/cabecalho/cabecalho.component';
import { IconebotaoComponent } from '../../componente/iconebotao/iconebotao.component';

@Component({
  selector: 'app-bioestimulador',
  standalone: true,
  imports: [CabecalhoComponent, IconebotaoComponent],
  templateUrl: './bioestimulador.component.html',
  styleUrl: './bioestimulador.component.css',
})
export class BioestimuladorComponent {}
