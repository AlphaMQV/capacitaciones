import { AfterViewInit, Component, EventEmitter, inject, Input, OnDestroy, OnInit, Output } from '@angular/core'
import { MyFirstService } from 'src/app/services/my-first.service'

@Component({
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.scss']
})
export class MyFirstComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() age?: number

  @Output() changeName = new EventEmitter<string>()

  // inyección de dependencias
  private myFirstSvc = inject(MyFirstService)

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

  hancleChangeName (): void {
    this.changeName.emit('Patrick')
  }

  get localVariable (): string {
    return this.myFirstSvc.names
  }
}
