import { inject, Injectable } from '@angular/core'
import { Auth, authState, signOut, User } from '@angular/fire/auth'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // inject
  private readonly _auth = inject(Auth)

  private readonly _user$ = new BehaviorSubject<User | null>(null)
  private readonly _uid$ = new BehaviorSubject<string | null>(null)

  constructor () {
    authState(this._auth)
      .subscribe(user => {
        this.verifyUserUid(user)
        this._user$.next(user)
      })
  }

  get user$ (): Observable<User | null> {
    return this._user$.asObservable()
  }

  get uid$ (): Observable<string | null> {
    return this._uid$.asObservable()
  }

  get uid (): string | null {
    return this._uid$.value
  }

  signOut (): Promise<void> {
    return signOut(this._auth)
  }

  private verifyUserUid (user: User | null): void {
    // si el usuario es nulo
    if (user === null) {
      // setear el uid en nulo
      this._uid$.next(null)
      return
    }
    // comparar si el uid es igual al uid actual
    if (this.uid === user.uid) return
    // setear el uid
    this._uid$.next(user.uid)
  }
}
