import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core'

@Component({
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.scss']
})
export class MyFirstComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() names?: string
  @Input() age?: number

  // @Output()

  constructor () {
    // inicializar variables
    // injección de dependencias
    console.log('constructor')
  }

  ngOnInit (): void {
    // inicializar parametros
    // iniciar variables
    // llamar a servicios
    // peticiones http
    console.log('ngOnInit')
  }

  ngAfterViewInit (): void {
    // manipular elementos del DOM
    console.log('ngAfterViewInit')
  }

  ngOnDestroy (): void {
    // limpiar memoria
    // cancelar peticiones http
    // cancelar suscripciones
    // eliminar listeners
    // eliminar intervalos
    console.log('ngOnDestroy')
  }
}
