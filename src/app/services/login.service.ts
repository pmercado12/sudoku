import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private usuarioRecurso: string = 'usuarios';
  private usuarioSesionRecurso: string = 'usuariosesion';
  private sesionIniciada: boolean = false;

  constructor(private apiService: ApiService) {

  }

  public ingresarJuego(usuario: string): Usuario {
    let usuarios = this.apiService.getRecursoLista(this.usuarioRecurso);
    let usuarioNuevo = this.buscarUsuario(usuario, usuarios);
    if (!usuarioNuevo) {
      usuarioNuevo = new Usuario();
      usuarioNuevo.idUsuario = usuarios.length + 1;
      usuarioNuevo.usuario = usuario;
      this.apiService.postRecursoLista(this.usuarioRecurso, usuarioNuevo);
    }
    this.apiService.postRecurso(this.usuarioSesionRecurso, usuarioNuevo);

    //iniciar session
    this.sesionIniciada = true;
    return usuarioNuevo;
  }

  public buscarUsuario(usuario: string, listaUsuarios: Usuario[]): Usuario {
    let respuesta: Usuario = null;
    for (var i = 0; i < listaUsuarios.length; i++) {
      if (listaUsuarios[i].usuario == usuario) {
        respuesta = listaUsuarios[i];
      }
    }
    return respuesta;
  }

  public getUsuarioActual(): Usuario {
    return this.apiService.getRecurso(this.usuarioSesionRecurso);
  }

  public estaConectado(): boolean {
    if (this.apiService.getRecurso(this.usuarioSesionRecurso)) {
      return true;
    }
    return false;
  }
}
