import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { ToastController } from '@ionic/angular';
import { AdicionarLicaoService } from "./adicionar-licaoService/adicionar-licao.service";
import { Licao, Usuario } from "../models";

@Component({
  selector: "app-adicionar-licao",
  templateUrl: "./adicionar-licao.page.html",
  styleUrls: ["./adicionar-licao.page.scss"],
})
export class AdicionarLicaoPage implements OnInit {
  idAluno: string = this.route.snapshot.params["idAluno"];
  idTurma: string = this.route.snapshot.params["idTurma"];

  dataSelecionada: Date;
  aluno: Usuario = new Usuario();
  licao: string;
  f: string;
  a1: string;
  l: string;
  e: string;
  a2: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastController: ToastController,
    private adicionarLicaoService: AdicionarLicaoService,
  ) {}

  ngOnInit(): void {
   this.getAluno(this.idAluno);
  }

  getAluno(idAluno: string){
    this.adicionarLicaoService.buscarAlunoPorId(idAluno).then((res) => {
      if (res != undefined) {
        this.aluno = res;
      } else {
        alert("Erro ao buscar pelo aluno!");
      }
    })
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
    const licao = new Licao();

    if ( this.idAluno == null || this.dataSelecionada == null || this.licao == null || this.f == null || this.a1 == null || this.a2 == null || this.e == null || this.l == null ) {
      this.apresentarMensagem("Preencha todos os campos de cadastro!");
    } else {
      licao.a1 = this.a1;
      licao.a2 = this.a2;
      licao.aluno =  this.idAluno;
      licao.data = this.dataSelecionada;
      licao.e = this.e;
      licao.f = this.f;
      licao.l = this.l;
      licao.licao = this.licao;

      this.adicionarLicaoService.cadastrarLicao(licao).then((res) => {
        this.apresentarMensagem("Lição registrada com sucesso!");
        this.router.navigate(["chamadas/" + this.idTurma]);
      });
    }
  }

}
