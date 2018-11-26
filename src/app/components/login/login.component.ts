import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: string;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {

  }

  ngOnInit() {
  }

  private ingresar() {
    //TODO guardar en la base y setear la variable de session
    this.loginService.ingresarJuego(this.usuario);
    this.router.navigate(['/sudokuf', 'F']);
  }

}
