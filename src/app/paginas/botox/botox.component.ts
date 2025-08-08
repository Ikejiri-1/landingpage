import { Component } from '@angular/core';
import { CabecalhoComponent } from '../../componente/cabecalho/cabecalho.component';
import { IconebotaoComponent } from '../../componente/iconebotao/iconebotao.component';
import { ContainerComponent } from '../../componente/container/container.component';
import { RodapeComponent } from '../../componente/rodape/rodape.component';

@Component({
  selector: 'app-botox',
  standalone: true,
  imports: [
    CabecalhoComponent,
    IconebotaoComponent,
    ContainerComponent,
    RodapeComponent,
  ],
  templateUrl: './botox.component.html',
  styleUrl: './botox.component.css',
})
export class BotoxComponent {}
