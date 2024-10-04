import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AlunoTurma } from 'src/app/models';



@Injectable({
  providedIn: 'root'
})
export class VizualizarAlunosService {

  private alunoTurmaUrl = environment.apiUrl + "alunosturma/";
  
  constructor(private http: HttpClient) { }

  getAlunosPorTurma(turma: string): Promise<AlunoTurma[]>{
    return new Promise((resolve, reject) => {
      this.http.get<AlunoTurma[]>(this.alunoTurmaUrl + "alunosPorTurma/" + turma).subscribe({
        next: (alunos) => resolve(alunos),
        error: (err) => reject(err),
      });
    });
  }

  deleteAlunoDaTurma(alunoId: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.delete<void>(this.alunoTurmaUrl + "delete/" + alunoId).subscribe({
        next: () => resolve(),
        error: (err) => reject(err),
      });
    });
  }
  
}

