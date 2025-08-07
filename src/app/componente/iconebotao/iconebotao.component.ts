import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ConsultaComponent } from '../consulta/consulta.component';

@Component({
  selector: 'app-iconebotao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './iconebotao.component.html',
  styleUrl: './iconebotao.component.css',
})
export class IconebotaoComponent {
  redirecionarParaInstagram() {
    window.open('https://www.instagram.com/nataliadejesuss_/', '_blank');
  }
  redirecionarParaWhatsapp() {
    const message = 'Olá, gostaria de marcar uma consulta!';
    const phone = '5512999999999';
    const encodedMessage = encodeURIComponent(message.trim());
    const cleanPhone = phone.replace(/\D/g, '');
    window.open(`//wa.me/${cleanPhone}?text=${encodedMessage}`, '_blank');
  }
}
