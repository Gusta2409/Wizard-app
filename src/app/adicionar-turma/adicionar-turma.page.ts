import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Turma } from "../models";
import { AdicionarTurmaService } from "./adicionar-turmaService/adicionar-turma.service";
import { ToastController } from '@ionic/angular';

@Component({
  selector: "app-adicionar-turma",
  templateUrl: "./adicionar-turma.page.html",
  styleUrls: ["./adicionar-turma.page.scss"],
})
export class AdicionarTurmaPage implements OnInit {
  diaSemana: string = this.route.snapshot.params["diaSemana"];
  modalidade: string;
  horario: string;
  professor: string = localStorage.getItem("idUsuarioLogado");

  constructor(
    private adicionarTurmaService: AdicionarTurmaService,
    private route: ActivatedRoute,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit(): void {
    this.horario == null;
    this.modalidade == null;
  }

  async apresentarMensagem(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'top',
    });

    await toast.present();
  }

  cadastrarTurma() {
    const turma = new Turma();

    if ( this.diaSemana == null || this.professor == null || this.horario == null || this.modalidade == null ) {
      this.apresentarMensagem("Preencha todos os campos de cadastro!");
    } else {
      turma.professor = this.professor;
      turma.diaSemana = this.diaSemana;
      turma.horario = this.horario;
      turma.modalidade = this.modalidade;

      this.adicionarTurmaService.cadastrarTurma(turma).then((res) => {
        this.apresentarMensagem("Turma cadastrada com sucesso!");
        this.router.navigate(["turma/" + this.diaSemana]);
      });
    }
  }
}
