import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Turma } from 'src/app/models';


@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  turmas: Turma[];
  turma: Turma;

  private url = environment.apiUrl + "turma/";

  constructor(private http: HttpClient) { }

  cadastrarTurma(turma: Partial<Turma>): Promise<Turma> {
    return new Promise((resolve, reject) => {
      this.http.post<Turma>(this.url + "cadastrar", turma).subscribe({
        next: (turmaCriada) => resolve(turmaCriada),
        error: (err) => reject(err),
      });
    });
  }

  getTurmaPorProfessorEDia(professor: string, diaSemana: string): Promise<Turma[]>{
    return new Promise((resolve, reject) => {
      const body = { professor: professor, diaSemana: diaSemana };
      this.http.post<Turma[]>(this.url + "turmaPorProfessorEDia", body).subscribe({
        next: (turmas) => resolve(turmas),
        error: (err) => reject(err),
      });
    });
  }
  
}
