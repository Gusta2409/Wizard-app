import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  tipoUsuario: String = this.route.snapshot.params["tipoUsuario"];
  email: string;
  senha: string;

  constructor(
    private authSrv: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log(this.tipoUsuario);
  }

  login() {
      this.authSrv.login(this.email, this.senha).then(res => {
        if(res != undefined){
          console.log("TESTE DO QUE VEM AQUI")
          console.log(res);
          localStorage.setItem('idUsuarioLogado', res.id);
          localStorage.setItem('tipoUsuarioLogado', res.tipo);
          localStorage.setItem('nomeUsuarioLogado', res.nome);
          this.router.navigate(['wizard/inicio']);
        } else {
          alert('Erro ao fazer login. Verifique suas credenciais.');
        }
      })
    }
}
