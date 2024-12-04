import { Component, inject, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { ToastService } from 'src/app/services/toast.service'
import { FormLoginInit } from '../helpers/form-login.init'
import { FormLogin } from '../interfaces/form-login.interface'
import { LoginService } from '../services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../sass/form-login.scss', './login.component.scss']
})
export class LoginComponent implements OnInit {
  // inject
  private readonly _loginService = inject(LoginService)
  private readonly _formLoginInit = inject(FormLoginInit)
  private readonly _toast = inject(ToastService)

  private formLogin: FormGroup<FormLogin>

  loading: boolean = false

  constructor () {
    this.initAllForms()
  }

  ngOnInit (): void {
  }

  private initAllForms (): void {
    this.formLogin = this._formLoginInit.groupLogin()
  }

  // --------------------- Methods ---------------------

  sendForm (): void {
    // si esta cargando salir de la función
    if (this.loading) return
    // si el formulario es invalido
    if (this.formLogin.invalid) {
      // mensaje de advertencia
      this._toast.warning('Verifique los campos inválidos')
      // marcar todos los campos como tocados
      this.formLogin.markAllAsTouched()
      // salir de la función
      return
    }
    this.login()
  }

  private async login (): Promise<void> {
    try {
      this.loading = true
      // desestructuración el objeto formLogin
      const { email, password } = this.formLogin.getRawValue()
      // llamada al servicio de login
      await this._loginService.login(email, password)
      // limpiar formulario
      this.resetForm()
      // mensaje de éxito
      this._toast.success('Usuario logeado correctamente')
    } catch (error) {
      console.log(error)
      this._toast.error('Error al registrar')
    } finally {
      this.loading = false
    }
  }

  // --------------------- helpers ---------------------

  private resetForm (): void {
    this.formLogin.reset()
  }

  // --------------------- Getters ---------------------

  get ctrlsFormLogin (): FormLogin {
    return this.formLogin.controls
  }
}
