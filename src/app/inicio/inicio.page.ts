import { Component, OnInit } from '@angular/core';
import { InicioService } from './inicioService/inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  nomeUsuarioLogado: string;
  tipoUsuario: string;

  constructor(private inicioService: InicioService) { }

  ngOnInit() {
      this.nomeUsuarioLogado = localStorage.getItem('nomeUsuarioLogado');
      this.tipoUsuario = localStorage.getItem('tipoUsuarioLogado');
  }

}
