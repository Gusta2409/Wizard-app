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


export class AlunoChamadaDTO {

    id: string;
    aluno: string;
    alunoId: string;
    turma: string;
    livro: string;
    idade: number;
    presenca: boolean;

    constructor() {
        this.presenca = false;
    }
}

export class Chamada {

    id: string;
    alunoTurma: string;
    idAlunoTurma: string;
    turma: string;
    data: Date;
    presenca: boolean;

    constructor() {
    }
}

export class Licao {

    id: string;
    aluno: string;
    licao: string;
    a1: string;
    l: string;
    e: string;
    a2: string;
    f: string;
    data: Date;

    constructor() {
    }
}


