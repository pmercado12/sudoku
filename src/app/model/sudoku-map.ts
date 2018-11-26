export class SudokuMap {
    longitud: number;
    valores: Array<Array<number>>;

    constructor(longitud:number, valores: Array<Array<number>>){
        this.longitud = longitud;
        this.valores = valores;
    }
}
