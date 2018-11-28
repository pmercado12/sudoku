import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  public getRecursoLista(recurso: string): any[] {
    let lista: any[] = JSON.parse(localStorage.getItem(recurso));
    if (!lista) {
      this.initRecurso(recurso);
      lista = [];
    }
    return lista;
  }

  public getRecurso(recurso: string): any {
    let respuesta: any = JSON.parse(localStorage.getItem(recurso));
    return respuesta;
  }

  public initRecurso(recurso: string): void {
    localStorage.setItem(recurso, JSON.stringify([]));
  }

  public postRecursoLista(recurso: string, data: any): void {

    let lista: any[] = JSON.parse(localStorage.getItem(recurso));
    if (!lista) {
      this.initRecurso(recurso);
      lista = [];
    }
    lista.push(data);
    localStorage.setItem(recurso, JSON.stringify(lista));
  }

  public postRecurso(recurso: string, data: any): void {
    localStorage.setItem(recurso, JSON.stringify(data));
  }

}
