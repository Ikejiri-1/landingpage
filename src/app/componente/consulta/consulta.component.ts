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
  }

  enviarConsulta() {
    if (this.infoPacienteForm.invalid) {
      this.infoPacienteForm.markAllAsTouched();
      return;
    }

    const dados = this.infoPacienteForm.value;

    const [ano, mes, dia] = dados.data.split('-');
    const dataFormatada = `${dia}/${mes}/${ano}`;

    let mensagem = `Olá, gostaria de agendar uma consulta:
    Nome: ${dados.nome}\n
    Telefone: ${dados.telefone}\n
    E-mail: ${dados.email}\n
    Data da consulta: ${dataFormatada}\n`;

    const telefoneDestino = '5512981211700';
    const url = `https://wa.me/${telefoneDestino}?text=${encodeURIComponent(
      mensagem
    )}`;
    window.open(url, '_blank');
    this.infoPacienteForm.reset();
  }
}
