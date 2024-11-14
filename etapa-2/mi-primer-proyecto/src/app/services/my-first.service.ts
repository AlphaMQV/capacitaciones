import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {
  // compartir informacion entre componentes
  // abstraer metodos y logica de negocio
  // crear formularios reactivos
  // llamadas a servicios HTTP
  names: string = 'Ariel'
}
