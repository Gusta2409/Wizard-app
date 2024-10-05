import { Component, OnInit } from '@angular/core';
import { AlunoTurma, Licao, Usuario } from '../models';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { VizualizarLicoesService } from './vizualizar-licoesService/vizualizar-licoes.service';

@Component({
  selector: 'app-vizualizar-licoes',
  templateUrl: 'vizualizar-licoes.page.html',
  styleUrls: ['vizualizar-licoes.page.scss'],
})
export class VizualizarLicoesPage implements OnInit{

  idTurma: string = this.route.snapshot.params["idTurma"];
  idAluno: string = this.route.snapshot.params["idAluno"];
  aluno: Usuario = new Usuario();

  licaoes: Licao[] = [];

  constructor( 
    private vizualizarLicoesService: VizualizarLicoesService,
    private route: ActivatedRoute,
    private toastController: ToastController,
  ) {}

  ngOnInit(): void {
    this.getLicoes(this.idAluno);
    this.getUsuario(this.idAluno)
  }

  getUsuario(id: string){
    this.vizualizarLicoesService.buscarAlunoPorId(id).then(res => {
      if(res != undefined){
        this.aluno = res;
      } else {
        alert('Erro ao buscar pelo aluno!');
      }
    })
  }

  getLicoes(aluno: string){
    this.vizualizarLicoesService.getLicoes(aluno).then(res => {
      if(res != undefined){
        this.licaoes = res;
      } else {
        alert('Erro ao buscar pelas lições!');
      }
    })
  }

  deletarLicao(id: string){
    this.vizualizarLicoesService.deleteLicao(id).then(res => {
      this.apresentarMensagem("Lição removida com sucesso!");
      this.getLicoes(this.idAluno);
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
}
