import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AlunoTurma, Licao, Usuario } from 'src/app/models';



@Injectable({
  providedIn: 'root'
})
export class VizualizarLicoesService {

  private licaoUrl = environment.apiUrl + "licao/";
  private usuarioUrl = environment.apiUrl + "usuario/";

  
  constructor(private http: HttpClient) { }

  getLicoes(idAluno: string): Promise<Licao[]>{
    return new Promise((resolve, reject) => {
      this.http.get<Licao[]>(this.licaoUrl + "aluno/" + idAluno).subscribe({
        next: (licoes) => resolve(licoes),
        error: (err) => reject(err),
      });
    });
  }

  deleteLicao(idLicao: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.delete<void>(this.licaoUrl + "delete/" + idLicao).subscribe({
        next: () => resolve(),
        error: (err) => reject(err),
      });
    });
  }

  buscarAlunoPorId(id: string): Promise<Usuario> {
    return new Promise((resolve, reject) => {
        this.http.get<Usuario>(this.usuarioUrl +id).subscribe({
            next: (aluno) => resolve(aluno),
            error: (err) => reject(err),
        });
    });
  
}
}

