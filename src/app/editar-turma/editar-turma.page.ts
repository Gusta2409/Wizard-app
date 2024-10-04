import { Component, forwardRef, Inject, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AlunoTurma, Turma, Usuario } from "../models";
import { ToastController } from '@ionic/angular';
import { EditarTurmaService } from "./editar-turmaService/editar-turma.service";
import { TurmaInfoPage } from "../turma-info/turmaInfo.page";

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
  idade: number;
  livro: string;
  alunoSelecionado: Usuario;
  turmaSelecionada: Turma;

  constructor(
    private editarTurmaService: EditarTurmaService,
    private route: ActivatedRoute,
    private router: Router,
    private toastController: ToastController,
    @Inject(forwardRef(() => TurmaInfoPage)) private turmaInfo: TurmaInfoPage
  ) {}

  ngOnInit(): void {
    this.buscarTurmaSelecionada(this.idTurma);
    this.listarAlunos();
  }

  buscarTurmaSelecionada(idTurma: string){
    this.editarTurmaService.buscarTurmaPorId(idTurma).then((res) => {
      if (res != undefined) {
       this.turmaSelecionada = res;
       this.modalidade = this.turmaSelecionada.modalidade;
       this.diaSemana = this.turmaSelecionada.diaSemana;
       this.horario = this.turmaSelecionada.horario;
       this.professor = this.turmaSelecionada.professor;
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
        this.turmaInfo.getTurmaSelecionada(this.idTurma);
      });
      this.router.navigate(["turma-info/" + this.idTurma], { relativeTo: this.route.parent }); 
  }
}

listarAlunos(){
  this.editarTurmaService.getAlunos("aluno").then((res) => {
    if (res != undefined) {
      this.alunos = res;
      console.log("Alunos")
      console.log(this.alunos);
    }
  })
}

adicionarAlunoTurma(){
  const alunoTurma = new AlunoTurma();

  if ( this.alunoSelecionado == null || this.livro == null || this.idade == null) {
    this.apresentarMensagem("Preencha todos os campos de cadastro do aluno!");
  } else {
    alunoTurma.aluno = this.alunoSelecionado.nome;
    alunoTurma.turma = this.idTurma;
    alunoTurma.alunoId = this.alunoSelecionado.id;
    alunoTurma.livro = this.livro;
    alunoTurma.idade =  this.idade;

    this.editarTurmaService.cadastrarAlunoTurma(alunoTurma).then((res) => {
    this.apresentarMensagem("Aluno cadastrado na turma com sucesso!");
    });
}
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
