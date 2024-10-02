import { Component, OnInit } from '@angular/core';
import { MinhasTurmasService } from './minhasTurmasService/minhas-turmas.service';

@Component({
  selector: 'app-minhasTurmas',
  templateUrl: './minhasTurmas.page.html',
  styleUrls: ['./minhasTurmas.page.scss'],
})
export class MinhasTurmasPage implements OnInit{

  dados: any;

  constructor( private minhasTurmasService: MinhasTurmasService) {}

  ngOnInit(): void {
     console.log("Lista de usuários professores");
      this.minhasTurmasService.getDados().subscribe(data => {
      this.dados = data;
  });
  console.log(this.dados);
  }

}