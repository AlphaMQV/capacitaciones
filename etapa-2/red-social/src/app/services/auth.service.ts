import { inject, Injectable } from '@angular/core'
import { Auth, authState, signOut } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // inject
  private readonly _auth = inject(Auth)

  authState$ = authState(this._auth)

  signOut (): Promise<void> {
    return signOut(this._auth)
  }
}
