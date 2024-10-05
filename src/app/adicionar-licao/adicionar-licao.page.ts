import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { ToastController } from '@ionic/angular';

@Component({
  selector: "app-adicionar-licao",
  templateUrl: "./adicionar-licao.page.html",
  styleUrls: ["./adicionar-licao.page.scss"],
})
export class AdicionarLicaoPage implements OnInit {
  idAluno: string = this.route.snapshot.params["idAluno"];
  dataSelecionada: Date;
  licao: string;
  f: string;
  a1: string;
  l: string;
  e: string;
  a2: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit(): void {
   
  }

  async apresentarMensagem(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'top',
    });

    await toast.present();
  }

}
