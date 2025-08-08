import { Component } from '@angular/core';
import { CabecalhoComponent } from '../../componente/cabecalho/cabecalho.component';
import { IconebotaoComponent } from '../../componente/iconebotao/iconebotao.component';
import { ContainerComponent } from '../../componente/container/container.component';
import { RodapeComponent } from '../../componente/rodape/rodape.component';

@Component({
  selector: 'app-sobrancelha',
  standalone: true,
  imports: [
    CabecalhoComponent,
    IconebotaoComponent,
    ContainerComponent,
    RodapeComponent,
  ],
  templateUrl: './sobrancelha.component.html',
  styleUrl: './sobrancelha.component.css',
})
export class SobrancelhaComponent {}
