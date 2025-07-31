import { Component } from '@angular/core';
import { CabecalhoComponent } from '../../componente/cabecalho/cabecalho.component';
import { IconebotaoComponent } from '../../componente/iconebotao/iconebotao.component';

@Component({
  selector: 'app-botox',
  standalone: true,
  imports: [CabecalhoComponent, IconebotaoComponent],
  templateUrl: './botox.component.html',
  styleUrl: './botox.component.css',
})
export class BotoxComponent {}
