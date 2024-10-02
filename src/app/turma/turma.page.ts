import { Component, OnInit } from '@angular/core';
import { TurmaService } from './turmaService/turma.service';
import { ActivatedRoute } from '@angular/router';
import { Turma } from '../models';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.page.html',
  styleUrls: ['./turma.page.scss'],
})
export class TurmaPage implements OnInit{
  diaSemana: string = this.route.snapshot.params["diaSemana"];
  turmas: Turma[];

  constructor( private turmaService: TurmaService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getTurmas(localStorage.getItem('idUsuarioLogado'), this.diaSemana);
  }

  getTurmas(professor: string, diaSemana: string){
    this.turmaService.getTurmaPorProfessorEDia(professor, diaSemana).then(res => {
      if(res != undefined){
        console.log("TURMAS PARA ESSE DIA")
        console.log(res);
        this.turmas = res;
      } else {
        alert('Erro ao buscar pelas turmas!');
      }
    })
  }

}