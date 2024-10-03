import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Turma, Usuario } from 'src/app/models';


@Injectable({
  providedIn: 'root'
})
export class EditarTurmaService {

  turma: Turma;

  private turmaUrl = environment.apiUrl + "turma/";
  private usuarioUrl = environment.apiUrl + "usuario/";

  constructor(private http: HttpClient) { }

  buscarTurmaPorId(id: string): Promise<Turma> {
    return new Promise((resolve, reject) => {
        this.http.get<Turma>(this.turmaUrl +id).subscribe({
            next: (turma) => resolve(turma),
            error: (err) => reject(err),
        });
    });
}

  editarTurma(id: string, turma: Partial<Turma>): Promise<Turma> {
    return new Promise((resolve, reject) => {
        this.http.put<Turma>(this.turmaUrl + "update/" +id, turma).subscribe({
            next: (turmaAtualizada) => resolve(turmaAtualizada),
            error: (err) => reject(err),
        });
    });
}

getAlunos(tipoUsuario: string): Promise<Usuario[]>{
  return new Promise((resolve, reject) => {
    this.http.get<Usuario[]>(this.usuarioUrl + "tipo/" + tipoUsuario).subscribe({
      next: (alunos) => resolve(alunos),
      error: (err) => reject(err),
    });
  });
}

}
