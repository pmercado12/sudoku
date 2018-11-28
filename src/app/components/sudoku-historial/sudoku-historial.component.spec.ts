import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuHistorialComponent } from './sudoku-historial.component';

describe('SudokuHistorialComponent', () => {
  let component: SudokuHistorialComponent;
  let fixture: ComponentFixture<SudokuHistorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SudokuHistorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SudokuHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
