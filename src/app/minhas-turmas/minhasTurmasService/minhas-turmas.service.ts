import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MinhasTurmasService {

  private apiUrl = 'http://localhost:4200';

  constructor(private http: HttpClient) { }

  getDados(): Observable<any> {
      return this.http.get(this.apiUrl);
  }
}
