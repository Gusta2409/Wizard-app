export class Usuario {

    id: string;
    nome: string;
    email: string;
    senha: string;
    tipo: string;

    constructor() {
    }
}

export class Turma {

    id: string;
    modalidade: string;
    horario: string;
    professor: string;
    diaSemana: string;

    constructor() {
    }
}

export class AlunoTurma {

    id: string;
    aluno: string;
    alunoId: string;
    turma: string;
    livro: string;
    idade: number;

    constructor() {
    }
}

