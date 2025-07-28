import { Component } from '@angular/core';
import { ContainerComponent } from '../../../componente/container/container.component';
import { CabecalhoComponent } from '../../../componente/cabecalho/cabecalho.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [ContainerComponent, CabecalhoComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
})
export class PrincipalComponent {}
