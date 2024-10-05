import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AlunoChamadaDTO, Chamada, Turma } from "../models";
import { ToastController } from "@ionic/angular";
import { AdicionarChamadaService } from "./adicionar-chamadaService/adicionar-chamada.service";

@Component({
  selector: "app-adicionar-chamada",
  templateUrl: "./adicionar-chamada.page.html",
  styleUrls: ["./adicionar-chamada.page.scss"],
})
export class AdicionarChamadaPage implements OnInit {
  idTurma: string = this.route.snapshot.params["idTurma"];
  turmaSelecionada: Turma = new Turma();
  alunosTurma: AlunoChamadaDTO[];
  dataSelecionada: Date;

  constructor(
    private adicionarChamadaService: AdicionarChamadaService,
    private route: ActivatedRoute,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit(): void {
    this.getTurmaSelecionada(this.idTurma);
  }

  getTurmaSelecionada(idTurma: string) {
    this.adicionarChamadaService.getTurmaPorId(idTurma).then((res) => {
      if (res != undefined) {
        this.turmaSelecionada = res;
        this.getAlunosDaTurma(idTurma);
      } else {
        alert("Erro ao buscar pelas turmas!");
      }
    });
  }

  getAlunosDaTurma(idTurma: string) {
    this.adicionarChamadaService.getAlunosPorTurma(idTurma).then((res) => {
      if (res != undefined) {
        this.alunosTurma = res;
        console.log(this.alunosTurma);
      } else {
        alert("Erro ao buscar pelos alunos da turma!");
      }
    });
  }

  async apresentarMensagem(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: "top",
    });

    await toast.present();
  }

  salvarChamada() {
    if (this.dataSelecionada == null) {
      this.apresentarMensagem("Preencha a data de cadastro da chamada!");
    } else {
      for (let res of this.alunosTurma) {
        const chamada = new Chamada();
        chamada.data = this.dataSelecionada;
        chamada.alunoTurma = res.aluno;
        chamada.idAlunoTurma = res.alunoId;
        chamada.presenca =
          res.presenca != null && res.presenca != undefined
            ? res.presenca
            : false;
        chamada.turma = res.turma;
        this.adicionarChamadaService
          .cadastrarChamada(chamada)
          .then((res) => {});
      }
      this.apresentarMensagem("Chamada registrada com sucesso!");
      this.router.navigate(["turma-info/" + this.idTurma]);
    }
  }
}
