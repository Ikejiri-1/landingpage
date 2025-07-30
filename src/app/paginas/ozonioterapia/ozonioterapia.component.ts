import { Component } from '@angular/core';
import { CabecalhoComponent } from '../../componente/cabecalho/cabecalho.component';
import { ContainerComponent } from '../../componente/container/container.component';
import { SeparadorComponent } from '../../componente/separador/separador.component';
import { RodapeComponent } from '../../componente/rodape/rodape.component';

@Component({
  selector: 'app-ozonioterapia',
  standalone: true,
  imports: [
    RodapeComponent,
    CabecalhoComponent,
    ContainerComponent,
    SeparadorComponent,
  ],
  templateUrl: './ozonioterapia.component.html',
  styleUrl: './ozonioterapia.component.css',
})
export class OzonioterapiaComponent {}
