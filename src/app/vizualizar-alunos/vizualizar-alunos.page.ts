import { Component, OnInit } from '@angular/core';
import { VizualizarAlunosService } from './vizualizar-alunosService/vizualizar-alunos.service';
import { AlunoTurma } from '../models';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-vizualizar-alunos',
  templateUrl: 'vizualizar-alunos.page.html',
  styleUrls: ['vizualizar-alunos.page.scss'],
})
export class VizualizarAlunosPage implements OnInit{

  idTurma: string = this.route.snapshot.params["idTurma"];
  alunos: AlunoTurma[];

  constructor( 
    private vizualizarAlunosService: VizualizarAlunosService,
    private route: ActivatedRoute,
    private toastController: ToastController,
  ) {}

  ngOnInit(): void {
    this.getAlunos(this.idTurma);
  }

  getAlunos(turma: string){
    this.vizualizarAlunosService.getAlunosPorTurma(turma).then(res => {
      if(res != undefined){
        this.alunos = res;
      } else {
        alert('Erro ao buscar pelos alunos da turma!');
      }
    })
  }

  deletarAluno(aluno: string){
    this.vizualizarAlunosService.deleteAlunoDaTurma(aluno).then(res => {
      this.apresentarMensagem("Aluno removido com sucesso!");
      this.getAlunos(this.idTurma);
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
