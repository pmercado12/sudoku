import { Component, OnInit } from '@angular/core';
import { SudokuHistorialService } from 'src/app/services/sudoku-historial.service';
import { SudokuHistorial } from 'src/app/model/sudoku-historial';

@Component({
  selector: 'sudoku-historial',
  templateUrl: './sudoku-historial.component.html',
  styleUrls: ['./sudoku-historial.component.css']
})
export class SudokuHistorialComponent implements OnInit {
  private historial: SudokuHistorial[];
  constructor(private sudokuHistorialService: SudokuHistorialService) { }

  ngOnInit() {
    this.getHistorialUsuario();
  }

  private getHistorialUsuario(): void {
    this.historial = this.sudokuHistorialService.getHistorialUsuario();
  }
}
