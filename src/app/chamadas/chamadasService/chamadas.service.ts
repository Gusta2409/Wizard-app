import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ChamadasService {

  private urlChamada = environment.apiUrl + "chamada/";


  constructor(private http: HttpClient) { }

  getDatas(idTurma: string): Promise<Date[]>{
    return new Promise((resolve, reject) => {
      this.http.get<Date[]>(this.urlChamada + "datas/" + idTurma).subscribe({
        next: (datas) => resolve(datas),
        error: (err) => reject(err),
      });
    });
  }
}