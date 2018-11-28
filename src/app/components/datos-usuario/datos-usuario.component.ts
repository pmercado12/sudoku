import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'datos-usuario',
  templateUrl: './datos-usuario.component.html',
  styleUrls: ['./datos-usuario.component.css']
})
export class DatosUsuarioComponent implements OnInit {

  private usuarioActual: Usuario;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.usuarioActual = this.loginService.getUsuarioActual();
  }

}
