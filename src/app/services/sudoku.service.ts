import { Injectable } from '@angular/core';
import { SudokuMap } from '../model/sudoku-map';

@Injectable({
  providedIn: 'root'
})
export class SudokuService {

  constructor() { }

  public getJuego(nivel: string): SudokuMap {
    if (nivel == 'F') {
      return this.getJuegoFacil();
    } else if (nivel == 'M') {
      return this.getJuegoMedio();
    } else {
      return this.getJuegoComplejo();
    }
  }

  private getJuegoComplejo(): SudokuMap {
    let lista: SudokuMap[] = [
      new SudokuMap(3, "C", [
        [2, 0, 8, 0, 0, 7, 3, 0, 0],
        [0, 4, 0, 8, 0, 0, 0, 0, 0],
        [0, 7, 0, 0, 0, 0, 9, 6, 0],
        [0, 6, 5, 0, 0, 0, 0, 0, 0],
        [0, 3, 1, 0, 0, 0, 6, 0, 5],
        [0, 2, 9, 6, 0, 0, 0, 7, 0],
        [6, 9, 0, 0, 0, 0, 0, 2, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 5, 1, 0, 0, 6]
      ])
    ];

    return lista[Math.floor(Math.random() * lista.length)];
  }

  private getJuegoMedio(): SudokuMap {
    let lista: SudokuMap[] = [
      new SudokuMap(3, "M", [
        [0, 0, 1, 0, 0, 0, 9, 4, 1],
        [4, 0, 7, 8, 3, 0, 2, 1, 0],
        [9, 0, 6, 5, 0, 0, 8, 0, 3],
        [8, 0, 0, 6, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 0, 1, 3, 0],
        [0, 0, 0, 0, 0, 3, 5, 0, 0],
        [5, 7, 0, 0, 0, 2, 4, 8, 0],
        [1, 6, 0, 0, 9, 0, 0, 5, 0],
        [0, 0, 0, 4, 1, 0, 0, 0, 7]
      ])
    ];

    return lista[Math.floor(Math.random() * lista.length)];
  }

  private getJuegoFacil(): SudokuMap {
    let lista: SudokuMap[] = [
      new SudokuMap(3, "F", [
        [1, 4, 2, 0, 9, 0, 0, 0, 5],
        [7, 0, 0, 4, 0, 0, 0, 8, 9],
        [8, 0, 5, 0, 0, 0, 0, 2, 4],
        [2, 0, 0, 0, 0, 4, 8, 0, 0],
        [0, 3, 0, 0, 0, 1, 2, 6, 0],
        [0, 8, 0, 0, 7, 2, 9, 4, 1],
        [0, 5, 0, 2, 0, 6, 0, 0, 0],
        [0, 2, 8, 0, 0, 9, 4, 1, 0],
        [0, 7, 9, 1, 0, 8, 5, 3, 0]
      ])
    ];

    return lista[Math.floor(Math.random() * lista.length)];
  }
}
