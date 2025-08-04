import { Component } from '@angular/core';

@Component({
  selector: 'app-iconebotao',
  standalone: true,
  imports: [],
  templateUrl: './iconebotao.component.html',
  styleUrl: './iconebotao.component.css',
})
export class IconebotaoComponent {
  redirecionarParaInstagram() {
    window.open('https://www.instagram.com/nataliadejesuss_/', '_blank');
  }
  redirecionarParaWhatsapp() {
    window.open('https://wa.me/5512999999999', '_blank');
  }
}
