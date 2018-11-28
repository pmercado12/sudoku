import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sudoku-tutorial',
  templateUrl: './sudoku-tutorial.component.html',
  styleUrls: ['./sudoku-tutorial.component.css']
})
export class SudokuTutorialComponent implements OnInit {
  pdfSrc: string = './assets/ManualSUDOKU.pdf';
  constructor() { }

  ngOnInit() {
  }

}
