import { inject, Injectable } from '@angular/core'
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential } from '@angular/fire/auth'

@Injectable({
  providedIn: 'any'
})
export class LoginService {
  private _auth = inject(Auth)

  login (email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(
      this._auth,
      email,
      password
    )
  }

  register (email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(
      this._auth,
      email,
      password
    )
  }
}
