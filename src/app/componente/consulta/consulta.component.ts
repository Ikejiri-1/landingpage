import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContainerComponent } from '../container/container.component';

@Component({
  selector: 'app-consulta',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ContainerComponent],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.css',
})
export class ConsultaComponent implements OnInit {
  hoje: string = new Date().toISOString().split('T')[0];

  infoPacienteForm!: FormGroup;

  ngOnInit() {
    this.infoPacienteForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      data: new FormControl('', Validators.required),
    });
    console.log('Formulário criado:', this.infoPacienteForm);
  }

  enviarConsulta() {
    if (this.infoPacienteForm.invalid) {
      this.infoPacienteForm.markAllAsTouched();
      return;
    }
    const dados = this.infoPacienteForm.value;
    console.log('Consulta enviada:', dados);
    alert('Consulta enviada com sucesso!');
    this.infoPacienteForm.reset();
  }
}
