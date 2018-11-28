import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SudokuComponent } from './components/sudoku/sudoku.component';
import { SudokuTutorialComponent } from './components/sudoku-tutorial/sudoku-tutorial.component';
import { LoginComponent } from './components/login/login.component';
import { SudokuHistorialComponent } from './components/sudoku-historial/sudoku-historial.component';

const routes: Routes = [
  { path: '', component: LoginComponent },  
  { path: 'sudokuf/:nivel', component: SudokuComponent },
  { path: 'sudokum/:nivel', component: SudokuComponent },
  { path: 'sudokuc/:nivel', component: SudokuComponent },
  { path: 'sudokucarga/:idHistorial', component: SudokuComponent },
  { path: 'sudoku-tutorial', component: SudokuTutorialComponent },
  { path: 'sudoku-historial', component: SudokuHistorialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
