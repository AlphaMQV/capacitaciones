import { Component } from '@angular/core'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  private _formMode: 'login' | 'register' = 'login'

  // --------------------------- methods ---------------------------

  onLoginMode (): void {
    this._formMode = 'login'
  }

  onRegisterMode (): void {
    this._formMode = 'register'
  }

  // --------------------------- helpers ---------------------------

  get isLoginMode (): boolean {
    return this._formMode === 'login'
  }

  get isRegisterMode (): boolean {
    return this._formMode === 'register'
  }
}
