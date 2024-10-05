import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Chamada, Turma } from 'src/app/models';


@Injectable({
  providedIn: 'root'
})
export class ChamadaInfoService {

  private urlChamada = environment.apiUrl + "chamada/";
  private urlTurma = environment.apiUrl + "turma/";

  constructor(private http: HttpClient) { }

  getTurmaPorId(idTurma: string): Promise<Turma>{
    return new Promise((resolve, reject) => {
      this.http.get<Turma>(this.urlTurma + idTurma).subscribe({
        next: (turma) => resolve(turma),
        error: (err) => reject(err),
      });
    });
  }

  buscarChamadasPorTurmaEData(idTurma: string, data: Date): Promise<Chamada[]>{
    return new Promise((resolve, reject) => {
      const body = { turma: idTurma, data: data };
      this.http.post<Chamada[]>(this.urlChamada + "buscarChamadasPorTurmaEData", body).subscribe({
        next: (chamadas) => resolve(chamadas),
        error: (err) => reject(err),
      });
    });
  }
}