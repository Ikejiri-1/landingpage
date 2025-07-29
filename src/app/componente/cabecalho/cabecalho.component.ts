import {
  Component,
  computed,
  ElementRef,
  HostListener,
  inject,
  signal,
} from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { SeparadorComponent } from '../separador/separador.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [RouterLink, SeparadorComponent],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css',
})
export class CabecalhoComponent {
  private router: Router = inject(Router);

  rotaAtual = signal<string>('');
  mostrarSubmenu = signal(false);

  constructor(private elementRef: ElementRef) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const navEnd = event as NavigationEnd;
        this.rotaAtual.set(navEnd.urlAfterRedirects);
      });
  }
  nomeDoBotao = computed(() =>
    this.rotaAtual() === '/sobre-mim' ? 'Início' : 'Sobre mim'
  );

  linkDoBotao = computed(() =>
    this.rotaAtual() === '/sobre-mim' ? '/' : '/sobre-mim'
  );
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
      this.mostrarSubmenu.set(false);
    }
  }
  alternarSubmenu() {
    this.mostrarSubmenu.set(!this.mostrarSubmenu());
  }
}
