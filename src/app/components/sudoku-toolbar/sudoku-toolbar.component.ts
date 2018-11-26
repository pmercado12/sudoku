import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sudoku-toolbar',
  templateUrl: './sudoku-toolbar.component.html',
  styleUrls: ['./sudoku-toolbar.component.css']
})
export class SudokuToolbarComponent implements OnInit {

  private listaNumeros: number[];
  private nroSeleccionado: number;

  constructor() {
    this.nroSeleccionado = 1;
  }

  ngOnInit() {
    this.listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  private seleccionarNro(nro: number) {
    this.nroSeleccionado = nro;
  }

  public getNroSeleccionado() {
    return this.nroSeleccionado;
  }
}
