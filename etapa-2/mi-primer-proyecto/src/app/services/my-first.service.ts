import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {
  private readonly _names$ = new BehaviorSubject<string>('Ariel')

  get names$ (): Observable<string> {
    return this._names$.asObservable()
  }

  setNames (value: string): void {
    this._names$.next(value)
  }
}
