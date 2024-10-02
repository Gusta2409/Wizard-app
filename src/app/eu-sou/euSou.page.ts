import { Component, OnInit } from '@angular/core';
import { EuSouService } from './eu-souService/euSou.service';

@Component({
  selector: 'app-euSou',
  templateUrl: 'euSou.page.html',
  styleUrls: ['euSou.page.scss'],
})
export class EuSouPage implements OnInit{

  constructor( private euSouService: EuSouService) {}

  dados: any;

  ngOnInit(): void {
     console.log("Lista de usuários professores");
    this.euSouService.getDados().subscribe(data => {
      this.dados = data;
  });
  console.log(this.dados);
  }

}
