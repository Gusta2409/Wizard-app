import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Turma, Usuario } from "../models";
import { ToastController } from '@ionic/angular';
import { EditarTurmaService } from "./editar-turmaService/editar-turma.service";

@Component({
  selector: "app-editar-turma",
  templateUrl: "./editar-turma.page.html",
  styleUrls: ["./editar-turma.page.scss"],
})
export class EditarTurmaPage implements OnInit {
  idTurma: string = this.route.snapshot.params["idTurma"];
  diaSemana: string;
  modalidade: string;
  horario: string;
  professor: string;
  alunos: Usuario[];
  alunoSelecionado: Usuario;

  constructor(
    private editarTurmaService: EditarTurmaService,
    private route: ActivatedRoute,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit(): void {
    this.buscarTurmaSelecionada(this.idTurma);
  }

  buscarTurmaSelecionada(idTurma: string){
    this.editarTurmaService.buscarTurmaPorId(idTurma).then((res) => {
      if (res != undefined) {
        this.diaSemana = res.diaSemana;
        this.modalidade = res.diaSemana;
        this.horario = res.diaSemana;
        this.professor = res.professor;
      } else {
        alert("Erro ao buscar pela turma!");
      }
    });
  }

  editarCadastro(){
    const turmaAtualizada = new Turma();

    if ( this.diaSemana == null || this.professor == null || this.horario == null || this.modalidade == null ) {
      this.apresentarMensagem("Preencha todos os campos de cadastro!");
    } else {
      turmaAtualizada.professor = this.professor;
      turmaAtualizada.diaSemana = this.diaSemana;
      turmaAtualizada.horario = this.horario;
      turmaAtualizada.modalidade = this.modalidade;

      this.editarTurmaService.editarTurma(this.idTurma, turmaAtualizada).then((res) => {
        this.apresentarMensagem("Cadastro da turma atualizado com sucesso!");
        this.router.navigate(["turma-info/" + this.idTurma]);
      });
  }
}

listarAlunos(){
  this.editarTurmaService.getAlunos("alunos").then((res) => {
    if (res != undefined) {
      this.alunos = res;
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

  
}
