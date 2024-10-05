import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AlunoChamadaDTO, AlunoTurma, Chamada, Turma } from 'src/app/models';


@Injectable({
  providedIn: 'root'
})
export class AdicionarChamadaService {

  private urlTurma = environment.apiUrl + "turma/";
  private urlAlunoTurma = environment.apiUrl + "alunosturma/";
  private urlChamada = environment.apiUrl + "chamada/";

  constructor(private http: HttpClient) { }

  cadastrarChamada(chamada: Partial<Chamada>): Promise<Chamada> {
    return new Promise((resolve, reject) => {
      this.http.post<Chamada>(this.urlChamada + "cadastrar", chamada).subscribe({
        next: (chamadaCriada) => resolve(chamadaCriada),
        error: (err) => reject(err),
      });
    });
  }

  getTurmaPorId(idTurma: string): Promise<Turma>{
    return new Promise((resolve, reject) => {
      this.http.get<Turma>(this.urlTurma + idTurma).subscribe({
        next: (turma) => resolve(turma),
        error: (err) => reject(err),
      });
    });
  }

  getAlunosPorTurma(idTurma: string): Promise<AlunoChamadaDTO[]>{
    return new Promise((resolve, reject) => {
      this.http.get<AlunoChamadaDTO[]>(this.urlAlunoTurma + "alunosPorTurma/" + idTurma).subscribe({
        next: (alunosTurma) => resolve(alunosTurma),
        error: (err) => reject(err),
      });
    });
  }

}
