import { TestBed } from '@angular/core/testing';

import { SudokuHistorialService } from './sudoku-historial.service';

describe('SudokuHistorialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SudokuHistorialService = TestBed.get(SudokuHistorialService);
    expect(service).toBeTruthy();
  });
});
