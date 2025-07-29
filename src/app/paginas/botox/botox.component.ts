import { Component } from '@angular/core';
import { CabecalhoComponent } from '../../componente/cabecalho/cabecalho.component';

@Component({
  selector: 'app-botox',
  standalone: true,
  imports: [CabecalhoComponent],
  templateUrl: './botox.component.html',
  styleUrl: './botox.component.css',
})
export class BotoxComponent {}
