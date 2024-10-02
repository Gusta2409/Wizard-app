import { Component, OnInit } from '@angular/core';
import { ChamadasService } from './chamadasService/chamadas.service';

@Component({
  selector: 'app-chamadas',
  templateUrl: './chamadas.page.html',
  styleUrls: ['./chamadas.page.scss'],
})
export class ChamadasPage implements OnInit{

  dados: any;

  constructor( private chamadasService: ChamadasService) {}

  ngOnInit(): void {
     console.log("Lista de usuários professores");
      this.chamadasService.getDados().subscribe(data => {
      this.dados = data;
  });
  console.log(this.dados);
  }

}