export class SudokuMap {
    longitud: number;
    valores: Array<Array<number>>;
    nivel: string;

    constructor(longitud: number, nivel: string, valores: Array<Array<number>>) {
        this.longitud = longitud;
        this.nivel = nivel;
        this.valores = valores;
    }
}
