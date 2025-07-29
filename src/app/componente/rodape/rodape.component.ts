import { Component } from '@angular/core';
import { ConsultaComponent } from '../consulta/consulta.component';

@Component({
  selector: 'app-rodape',
  standalone: true,
  imports: [ConsultaComponent],
  templateUrl: './rodape.component.html',
  styleUrl: './rodape.component.css',
})
export class RodapeComponent {}
