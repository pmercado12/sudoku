import { Component, OnInit, ViewChild } from '@angular/core';
import { SudokuMap } from '../../model/sudoku-map';
import { SudokuToolbarComponent } from '../sudoku-toolbar/sudoku-toolbar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { LoginService } from '../../services/login.service';
import { Usuario } from '../../model/usuario';
import { SudokuHistorialService } from 'src/app/services/sudoku-historial.service';
import { SudokuHistorial } from 'src/app/model/sudoku-historial';
import { SudokuService } from 'src/app/services/sudoku.service';


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
    private sudokuHistorialService: SudokuHistorialService,
    private sudokuService: SudokuService
  ) {

  }

  ngOnInit() {
    if (!this.loginService.estaConectado()) {
      this.router.navigate(['/']);
    }

    if (this.route.snapshot.params.nivel) {
      this.nivel = this.route.snapshot.params.nivel;
      this.juegoOriginal = this.sudokuService.getJuego(this.nivel);

      let valoresAux = [];

      for (var i = 0; i < this.juegoOriginal.valores.length; i++)
        valoresAux[i] = this.juegoOriginal.valores[i].slice();

      this.juegoActual = new SudokuMap(
        this.juegoOriginal.longitud,
        this.juegoOriginal.nivel,
        valoresAux);
    } else {
      //historial
      this.idHistorial = this.route.snapshot.params.idHistorial;
      this.sudokuHistorial = this.sudokuHistorialService.getHistorial(this.idHistorial);
      this.juegoOriginal = this.sudokuHistorial.juegoOriginal;
      this.juegoActual = this.sudokuHistorial.juegoActual;
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
