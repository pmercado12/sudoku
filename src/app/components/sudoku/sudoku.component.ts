import { Component, OnInit, ViewChild } from '@angular/core';
import { SudokuMap } from '../../model/sudoku-map';
import { SudokuToolbarComponent } from '../sudoku-toolbar/sudoku-toolbar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { LoginService } from '../../services/login.service';
import { Usuario } from '../../model/usuario';
import { SudokuHistorialService } from 'src/app/services/sudoku-historial.service';
import { SudokuHistorial } from 'src/app/model/sudoku-historial';


@Component({
  selector: 'sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.css']
})
export class SudokuComponent implements OnInit {

  private juegoActual: SudokuMap;
  private juegoOriginal: SudokuMap;
  private nivel: string;
  private descripcionNivel: string;
  private idHistorial: number;
  private sudokuHistorial: SudokuHistorial;


  @ViewChild("sudoToolbar")
  private sudokuToolbar: SudokuToolbarComponent;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService,
    private sudokuHistorialService: SudokuHistorialService
  ) {

  }

  ngOnInit() {
    if (!this.loginService.estaConectado()) {
      this.router.navigate(['/']);
    }

    if (this.route.snapshot.params.nivel) {
      this.nivel = this.route.snapshot.params.nivel;
      this.juegoActual = this.getMapaSudoku();
      this.juegoOriginal = this.getMapaSudoku();
    } else {
      //historial
      this.idHistorial = this.route.snapshot.params.idHistorial;
      this.sudokuHistorial = this.sudokuHistorialService.getHistorial(this.idHistorial);
      this.juegoActual = this.sudokuHistorial.juegoActual;
      this.juegoOriginal = this.sudokuHistorial.juegoOriginal;
      this.nivel = this.sudokuHistorial.juegoOriginal.nivel;
    }
    this.setNivel();
  }

  private setNivel() {
    if (this.nivel == 'F') {
      this.descripcionNivel = 'Facil';
    }
    else if (this.nivel == 'M') {
      this.descripcionNivel = 'Medio';
    }
    else {
      this.descripcionNivel = 'Complejo';
    }
  }

  private getMapaSudoku(): SudokuMap {
    return new SudokuMap(3, "F", [
      [1, 4, 2, 0, 9, 0, 0, 0, 5],
      [7, 0, 0, 4, 0, 0, 0, 8, 9],
      [8, 0, 5, 0, 0, 0, 0, 2, 4],
      [2, 0, 0, 0, 0, 4, 8, 0, 0],
      [0, 3, 0, 0, 0, 1, 2, 6, 0],
      [0, 8, 0, 0, 7, 2, 9, 4, 1],
      [0, 5, 0, 2, 0, 6, 0, 0, 0],
      [0, 2, 8, 0, 0, 9, 4, 1, 0],
      [0, 7, 9, 1, 0, 8, 5, 3, 0]
    ]);
    /*return new SudokuMap(3, [
      [1, 4, 2, 8, 9, 3, 6, 7, 5],
      [7, 6, 3, 4, 2, 5, 1, 8, 9],
      [8, 9, 5, 6, 1, 7, 3, 2, 4],
      [2, 1, 7, 9, 6, 4, 8, 5, 3],
      [9, 3, 4, 5, 8, 1, 2, 6, 7],
      [5, 8, 6, 3, 7, 2, 9, 4, 1],
      [4, 5, 1, 2, 3, 6, 7, 9, 8],
      [3, 2, 8, 7, 5, 9, 4, 1, 6],
      [6, 7, 9, 1, 4, 8, 5, 3, 2]
    ]);*/
  }

  private pintarCelda(i: number, j: number): void {
    this.juegoActual.valores[i][j] = this.sudokuToolbar.getNroSeleccionado();
  }

  private guardar() {
    if (this.idHistorial) {
      this.sudokuHistorial.juegoActual = this.juegoActual;
      this.sudokuHistorialService.actualizaHistorial(this.sudokuHistorial);
    } else {
      let sudokuHistorial = new SudokuHistorial();
      sudokuHistorial.juegoActual = this.juegoActual;
      sudokuHistorial.juegoOriginal = this.juegoOriginal;
      this.sudokuHistorialService.crearHistorial(sudokuHistorial);
    }

    alert("La partida ha sido guardada");
  }

  private terminar(): void {
    if (!this.validar()) {
      return;
    }
    alert("Felicidades ha concluido con el sudoku!!!");
  }

  private validar(): boolean {
    if (!this.estaCompleto()) {
      alert("El juego no esta completo");
      return false;
    }
    if (!this.validarFilas()) {
      alert("El juego tiene error en filas");
      return false;
    }
    if (!this.validarColumnas()) {
      alert("El juego tiene error en columnas");
      return false;
    }
    if (!this.validarRecuadros()) {
      alert("El juego tiene error en recuadros");
      return false;
    }
    return true;
  }

  private validarRecuadros() {
    let nroElementosRecuadro: number = this.juegoActual.longitud;
    for (let i = 0; i < this.juegoActual.valores.length; i += nroElementosRecuadro) {
      if (!this.validarRecuadro(nroElementosRecuadro, i)) {
        return false;
      }
    }
    return true;
  }

  private validarRecuadro(nroElementosRecuadro: number, posicionInicial: number): boolean {
    let arrayAux = [];
    for (let j = posicionInicial; j < posicionInicial + nroElementosRecuadro; j++) {
      for (let k = posicionInicial; k < posicionInicial + nroElementosRecuadro; k++) {
        arrayAux.push(this.juegoActual.valores[j][k]);
      }
    }
    if (!this.validarArray(arrayAux)) {
      return false;
    }
    return true;
  }

  private estaCompleto(): boolean {
    for (let i = 0; i < this.juegoActual.valores.length; i++) {
      for (let j = 0; j < this.juegoActual.valores[i].length; j++) {
        if (this.juegoActual.valores[i][j] == 0) {
          return false;
        }
      }
    }
    return true;
  }

  private validarFilas(): boolean {
    let respuesta: boolean;
    for (let i = 0; i < this.juegoActual.valores.length; i++) {
      respuesta = this.validarArray(this.juegoActual.valores[i]);
      if (!respuesta) {
        return false;
      }
    }
    return true;
  }

  private validarColumnas(): boolean {
    let respuesta: boolean;
    let arrayColumna: number[];
    for (let i = 0; i < this.juegoActual.valores[0].length; i++) {
      if (!this.validarColumna(i)) {
        return false;
      }
    }
    return true;
  }

  private validarColumna(nroColumna: number): boolean {
    let array: number[] = [];
    for (let i = 0; i < this.juegoActual.valores.length; i++) {
      array.push(this.juegoActual.valores[i][nroColumna]);
    }
    return this.validarArray(array);
  }

  private validarArray(fila: number[]): boolean {
    let array: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < fila.length; i++) {
      if (array[fila[i]] != 0) {
        return false;
      }
      array[fila[i]] = 1;
    }
    return true;
  }

}
