import { Component } from '@angular/core';
import { CabecalhoComponent } from '../../componente/cabecalho/cabecalho.component';
import { IconebotaoComponent } from '../../componente/iconebotao/iconebotao.component';
import { ContainerComponent } from '../../componente/container/container.component';
import { RodapeComponent } from '../../componente/rodape/rodape.component';

@Component({
  selector: 'app-cilios',
  standalone: true,
  imports: [
    CabecalhoComponent,
    IconebotaoComponent,
    ContainerComponent,
    RodapeComponent,
  ],
  templateUrl: './cilios.component.html',
  styleUrl: './cilios.component.css',
})
export class CiliosComponent {}
