import { AfterViewInit, Component, inject, Input, OnDestroy, OnInit } from '@angular/core'
import { MyFirstService } from 'src/app/services/my-first.service'

@Component({
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.scss']
})
export class MyFirstComponent implements OnInit, AfterViewInit, OnDestroy {
  // input
  @Input() age?: number

  // inyección de dependencias
  private myFirstSvc = inject(MyFirstService)

  localVariable: string = ''

  // localVariable

  constructor () {
    // inicializar variables
    // injección de dependencias
    console.log('constructor')
  }

  ngOnInit (): void {
    // inicializar parametros
    // iniciar variables
    // llamar a servicios
    // realizar subscripciones a observables
    // peticiones http
    console.log('ngOnInit')
    this.myFirstSvc.names$
      .subscribe((value) => {
        // console.log(value)
        this.localVariable = value
      })
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

  handleChangeName (): void {
    // this.changeName.emit('Patrick')
    this.myFirstSvc.setNames('Patrick')
  }
}
