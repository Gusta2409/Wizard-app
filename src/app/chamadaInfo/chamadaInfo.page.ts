import { Component, OnInit } from '@angular/core';
import { ChamadaInfoService } from './chamadaInfoService/chamadaInfo.service';

@Component({
  selector: 'app-chamadaInfo',
  templateUrl: './chamadaInfo.page.html',
  styleUrls: ['./chamadaInfo.page.scss'],
})
export class ChamadaInfoPage implements OnInit{

  dados: any;

  constructor( private chamadaInfoService: ChamadaInfoService) {}

  ngOnInit(): void {
     console.log("Lista de usuários professores");
      this.chamadaInfoService.getDados().subscribe(data => {
      this.dados = data;
  });
  console.log(this.dados);
  }

}