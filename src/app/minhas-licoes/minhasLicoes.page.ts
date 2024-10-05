import { Component, OnInit } from '@angular/core';
import { MinhasLicoesService } from './minhasLicoesService/minhas-licoes.service';
import { Licao, Usuario } from '../models';

@Component({
  selector: 'app-minhasLicoes',
  templateUrl: './minhasLicoes.page.html',
  styleUrls: ['./minhasLicoes.page.scss'],
})
export class MinhasLicoesPage implements OnInit{

  idAluno: string = localStorage.getItem('idUsuarioLogado');
  aluno: Usuario = new Usuario();
  licoes: Licao[] = [];


  constructor( private minhasLicoesService: MinhasLicoesService) {}

  ngOnInit(): void {
    this.getLicoes(this.idAluno);
    this.getUsuario(this.idAluno);
  }

  getUsuario(id: string){
    this.minhasLicoesService.buscarAlunoPorId(id).then(res => {
      if(res != undefined){
        this.aluno = res;
      } else {
        alert('Erro ao buscar pelo aluno!');
      }
    })
  }

  getLicoes(aluno: string){
    this.minhasLicoesService.getLicoes(aluno).then(res => {
      if(res != undefined){
        this.licoes = res;
      } else {
        alert('Erro ao buscar pelas lições!');
      }
    })
  }

}