import { Component, ElementRef, HostListener } from '@angular/core';
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
  mostrarSubmenu: boolean = false;

  constructor(private router: Router, private elementRef: ElementRef) {
    this.router.events.subscribe(() => {
      this.rotaAtual = this.router.url;
    });
  }
  redirecionarParaContato() {
    const elemento = document.getElementById('contato');
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' });
    }
  }
  @HostListener('document:click', ['$event'])
  fecharSubmenuAoClicarFora(event: MouseEvent) {
    const clicadoDentro = this.elementRef.nativeElement.contains(event.target);
    if (!clicadoDentro) {
      this.mostrarSubmenu = false;
    }
  }
}
