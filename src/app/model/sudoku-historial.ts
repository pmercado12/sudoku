import { SudokuMap } from "./sudoku-map";

export class SudokuHistorial {
    idHistorial: number;
    idUsuario: number;
    juegoOriginal: SudokuMap;
    juegoActual: SudokuMap;
    fecha: Date;
}
