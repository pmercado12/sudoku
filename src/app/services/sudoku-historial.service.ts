import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { SudokuHistorial } from '../model/sudoku-historial';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class SudokuHistorialService {
  private sudokuHistorialRecurso: string = 'sudokuhistorial';

  constructor(private apiService: ApiService,
    private loginService: LoginService) {

  }

  public getHistorialUsuario() {

    let idUsuario: number = this.loginService.getUsuarioActual().idUsuario;
    console.log(idUsuario);

    let respuesta: SudokuHistorial[] = [];

    let lista: SudokuHistorial[] = this.apiService.getRecursoLista(this.sudokuHistorialRecurso);

    for (let i = 0; i < lista.length; i++) {
      if (lista[i].idUsuario == idUsuario) {
        respuesta.push(lista[i]);
      }
    }
    return respuesta;
  }

  public crearHistorial(sudokuHistorial: SudokuHistorial) {

    let lista: SudokuHistorial[] = this.apiService.getRecursoLista(this.sudokuHistorialRecurso);

    sudokuHistorial.idHistorial = lista.length + 1;
    sudokuHistorial.idUsuario = this.loginService.getUsuarioActual().idUsuario;
    sudokuHistorial.fecha = new Date();
    this.apiService.postRecursoLista(this.sudokuHistorialRecurso, sudokuHistorial);
  }

  public eliminarHistorial(sudokuHistorial: SudokuHistorial) {
    let lista: SudokuHistorial[] = this.apiService.getRecursoLista(this.sudokuHistorialRecurso);
    let nuevaLista: SudokuHistorial[] = [];    
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].idHistorial != sudokuHistorial.idHistorial) {
        nuevaLista.push(lista[i]);
      }
    }
    this.apiService.postRecurso(this.sudokuHistorialRecurso, nuevaLista);
  }
}
