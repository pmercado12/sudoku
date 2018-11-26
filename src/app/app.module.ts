import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SudokuComponent } from './components/sudoku/sudoku.component';
import { SudokuTutorialComponent } from './components/sudoku-tutorial/sudoku-tutorial.component';
import { LoginComponent } from './components/login/login.component';
import { SudokuToolbarComponent } from './components/sudoku-toolbar/sudoku-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SudokuComponent,
    SudokuTutorialComponent,
    LoginComponent,
    SudokuToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
