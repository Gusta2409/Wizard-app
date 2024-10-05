import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AlunoTurma, Licao } from 'src/app/models';



@Injectable({
  providedIn: 'root'
})
export class VizualizarLicoesService {

  private licaoUrl = environment.apiUrl + "licao/";
  
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
  
}

