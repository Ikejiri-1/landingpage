import { Component } from '@angular/core';
import { CabecalhoComponent } from '../../componente/cabecalho/cabecalho.component';
import { IconebotaoComponent } from '../../componente/iconebotao/iconebotao.component';
import { RodapeComponent } from '../../componente/rodape/rodape.component';
import { ContainerComponent } from '../../componente/container/container.component';

@Component({
  selector: 'app-bioestimulador',
  standalone: true,
  imports: [
    CabecalhoComponent,
    IconebotaoComponent,
    RodapeComponent,
    ContainerComponent,
  ],
  templateUrl: './bioestimulador.component.html',
  styleUrl: './bioestimulador.component.css',
})
export class BioestimuladorComponent {}
