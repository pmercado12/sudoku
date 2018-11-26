import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario : string;

  constructor(
    private router: Router
  ) { 

  }

  ngOnInit() {
  }

  private ingresar(){
    //TODO guardar en la base y setear la variable de session
    this.router.navigate(['/sudoku']);
  }

}
