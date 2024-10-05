import { Component, OnInit } from '@angular/core';
import { ChamadaInfoService } from './chamadaInfoService/chamadaInfo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Chamada, Turma } from '../models';

@Component({
  selector: 'app-chamadaInfo',
  templateUrl: './chamadaInfo.page.html',
  styleUrls: ['./chamadaInfo.page.scss'],
})
export class ChamadaInfoPage implements OnInit{

  idTurma: string = this.route.snapshot.params["idTurma"];
  data: Date = this.route.snapshot.params["data"];
  chamadas: Chamada[];
  turmaSelecionada: Turma = new Turma();

  constructor( private chamadaInfoService: ChamadaInfoService, private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.getTurma(this.idTurma);
    this.buscarChamadasPorTurmaEData(this.idTurma, this.data);
  }

  getTurma(idTurma: string){
    this.chamadaInfoService.getTurmaPorId(idTurma).then((res) => {
      if (res != undefined) {
        this.turmaSelecionada = res;
        console.log(this.turmaSelecionada);
      } else {
        alert("Erro ao buscar pelos alunos da turma!");
      }
    });
  }

  buscarChamadasPorTurmaEData(idTurma: string, data: Date) {
    this.chamadaInfoService.buscarChamadasPorTurmaEData(idTurma, data).then((res) => {
      if (res != undefined) {
        this.chamadas = res;
        console.log(this.chamadas);
      } else {
        alert("Erro ao buscar pelos alunos da turma!");
      }
    });
  }

}