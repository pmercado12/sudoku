import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SudokuComponent } from './components/sudoku/sudoku.component';
import { SudokuTutorialComponent } from './components/sudoku-tutorial/sudoku-tutorial.component';
import { LoginComponent } from './components/login/login.component';
import { SudokuToolbarComponent } from './components/sudoku-toolbar/sudoku-toolbar.component';
import { SudokuHistorialComponent } from './components/sudoku-historial/sudoku-historial.component';
import { MenuComponent } from './components/menu/menu.component';
import { DatosUsuarioComponent } from './components/datos-usuario/datos-usuario.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    SudokuComponent,
    SudokuTutorialComponent,
    LoginComponent,
    SudokuToolbarComponent,
    SudokuHistorialComponent,
    MenuComponent,
    DatosUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
