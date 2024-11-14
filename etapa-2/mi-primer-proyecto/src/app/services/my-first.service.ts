import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {
  // compartir informacion entre componentes
  // abstraer metodos y logica de negocio
  // crear formularios reactivos
  // llamadas a servicios HTTP
  private _names: string = 'Ariel'
  // convertir a un behavior subject e inicialiar con Ariel (names$)

  get names (): string {
    return this._names
  }

  set names (value: string) {
    this._names = value
  }
}
