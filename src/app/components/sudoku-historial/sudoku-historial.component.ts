import { Component, OnInit } from '@angular/core';
import { SudokuHistorialService } from 'src/app/services/sudoku-historial.service';
import { SudokuHistorial } from 'src/app/model/sudoku-historial';
import { Router } from '@angular/router';

@Component({
  selector: 'sudoku-historial',
  templateUrl: './sudoku-historial.component.html',
  styleUrls: ['./sudoku-historial.component.css']
})
export class SudokuHistorialComponent implements OnInit {
  private historial: SudokuHistorial[];
  constructor(
    private sudokuHistorialService: SudokuHistorialService,
    private router: Router) { }

  ngOnInit() {
    this.getHistorialUsuario();
  }

  private getHistorialUsuario(): void {
    this.historial = this.sudokuHistorialService.getHistorialUsuario();
  }

  private eliminar(sudokuHistorial: SudokuHistorial): void {
    this.sudokuHistorialService.eliminarHistorial(sudokuHistorial);
    this.getHistorialUsuario();
  }

  private cargar(sudokuHistorial: SudokuHistorial) {
    this.router.navigate(['/sudokucarga', sudokuHistorial.idHistorial]);
  }
}
