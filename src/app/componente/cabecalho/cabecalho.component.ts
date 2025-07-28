import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SeparadorComponent } from '../separador/separador.component';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [RouterLink, SeparadorComponent],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css',
})
export class CabecalhoComponent {
  rotaAtual: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.rotaAtual = this.router.url;
    });
  }
}
