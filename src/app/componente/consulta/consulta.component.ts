import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-consulta',
  standalone: true,
  imports: [],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.css',
})
export class ConsultaComponent {
  hoje: string = new Date().toISOString().split('T')[0];

  infoPacienteForm!: FormGroup;

  enviarConsulta() {
    this.infoPacienteForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      data: new FormControl('', Validators.required),
    });
  }
}
