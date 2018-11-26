import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuToolbarComponent } from './sudoku-toolbar.component';

describe('SudokuToolbarComponent', () => {
  let component: SudokuToolbarComponent;
  let fixture: ComponentFixture<SudokuToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SudokuToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SudokuToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
