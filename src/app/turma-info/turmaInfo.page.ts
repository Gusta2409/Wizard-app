import { Component, OnInit } from "@angular/core";
import { TurmaInfoService } from "./turmaInfoService/turmaInfo.service";
import { ActivatedRoute } from "@angular/router";
import { AlunoTurma, Turma } from "../models";

@Component({
  selector: "app-turmaInfo",
  templateUrl: "./turmaInfo.page.html",
  styleUrls: ["./turmaInfo.page.scss"],
})
export class TurmaInfoPage implements OnInit {
  idTurma: string = this.route.snapshot.params["idTurma"];
  turmaSelecionada: Turma;
  alunos: AlunoTurma[];

  constructor(
    private turmaInfoService: TurmaInfoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getTurmaSelecionada(this.idTurma);
  }

  getTurmaSelecionada(idTurma: string) {
    this.turmaSelecionada = new Turma;
    this.turmaInfoService.getTurmaPorId(idTurma).then((res) => {
      if (res != undefined) {
        this.turmaSelecionada = res;
        this.getAlunosDaTurma(idTurma);
      } else {
        alert("Erro ao buscar pelas turmas!");
      }
    });
  }

  getAlunosDaTurma(idTurma: string) {
    this.turmaInfoService.getAlunosPorTurma(idTurma).then((res) => {
      if (res != undefined) {
        this.alunos = res;
      } else {
        alert("Erro ao buscar pelos alunos da turma!");
      }
    });
  }
}
