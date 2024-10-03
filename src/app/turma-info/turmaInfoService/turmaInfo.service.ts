import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AlunoTurma, Turma } from 'src/app/models';


@Injectable({
  providedIn: 'root'
})
export class TurmaInfoService {

  turma: Turma;

  private urlTurma = environment.apiUrl + "turma/";
  private urlAlunoTurma = environment.apiUrl + "alunosturma/";


  constructor(private http: HttpClient) { }

  getTurmaPorId(idTurma: string): Promise<Turma>{
    return new Promise((resolve, reject) => {
      this.http.get<Turma>(this.urlTurma + idTurma).subscribe({
        next: (turma) => resolve(turma),
        error: (err) => reject(err),
      });
    });
  }

  getAlunosPorTurma(idTurma: string): Promise<AlunoTurma[]>{
    return new Promise((resolve, reject) => {
      this.http.get<AlunoTurma[]>(this.urlAlunoTurma + "alunosPorTurma/" + idTurma).subscribe({
        next: (alunosTurma) => resolve(alunosTurma),
        error: (err) => reject(err),
      });
    });
  }

}
