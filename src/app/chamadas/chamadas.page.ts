import { Component, OnInit } from '@angular/core';
import { ChamadasService } from './chamadasService/chamadas.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-chamadas',
  templateUrl: './chamadas.page.html',
  styleUrls: ['./chamadas.page.scss'],
})
export class ChamadasPage implements OnInit{

  idTurma: string = this.route.snapshot.params["idTurma"];
  datas: Date[];

  constructor( private chamadasService: ChamadasService, private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
     this.buscaDatas(this.idTurma);
  }

  buscaDatas(idTurma: string){
    this.chamadasService.getDatas(idTurma).then((res) => {
      this.datas = res;
      console.log(this.datas);
    });
  }


}