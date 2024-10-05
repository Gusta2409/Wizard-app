import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Licao, Turma, Usuario } from 'src/app/models';


@Injectable({
  providedIn: 'root'
})
export class AdicionarLicaoService {


  private licaoUrl = environment.apiUrl + "licao/";
  private usuarioUrl = environment.apiUrl + "usuario/";


  constructor(private http: HttpClient) { }

  buscarAlunoPorId(id: string): Promise<Usuario> {
    return new Promise((resolve, reject) => {
        this.http.get<Usuario>(this.usuarioUrl +id).subscribe({
            next: (aluno) => resolve(aluno),
            error: (err) => reject(err),
        });
    });
}

cadastrarLicao(licao: Partial<Licao>): Promise<Licao> {
  return new Promise((resolve, reject) => {
    this.http.post<Licao>(this.licaoUrl + "cadastrar", licao).subscribe({
      next: (licaoCriada) => resolve(licaoCriada),
      error: (err) => reject(err),
    });
  });
}

}
