import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuTutorialComponent } from './sudoku-tutorial.component';

describe('SudokuTutorialComponent', () => {
  let component: SudokuTutorialComponent;
  let fixture: ComponentFixture<SudokuTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SudokuTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SudokuTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
