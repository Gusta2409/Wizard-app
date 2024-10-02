import { Component, OnInit } from '@angular/core';
import { TurmaInfoService } from './turmaInfoService/turmaInfo.service';
import { ActivatedRoute } from '@angular/router';
import { Turma } from '../models';

@Component({
  selector: 'app-turmaInfo',
  templateUrl: './turmaInfo.page.html',
  styleUrls: ['./turmaInfo.page.scss'],
})
export class TurmaInfoPage implements OnInit{

  idTurma: string = this.route.snapshot.params["idTurma"];
  turmaSelecionada: Turma = new Turma;

  constructor( private turmaInfoService: TurmaInfoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getTurmaSelecionada(this.idTurma);
  }

  getTurmaSelecionada(idTurma: string){
    this.turmaInfoService.getTurmaPorId(idTurma).then(res => {
      if(res != undefined){
        this.turmaSelecionada = res;
        console.log("TURMA SELECIONADA")
        console.log(res);
      } else {
        alert('Erro ao buscar pelas turmas!');
      }
    })
  }

}