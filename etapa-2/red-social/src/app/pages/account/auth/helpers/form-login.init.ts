import { inject, Injectable } from '@angular/core'
import { FormGroup, NonNullableFormBuilder } from '@angular/forms'
import { FormLogin } from '../interfaces/form-login.interface'

@Injectable({
  providedIn: 'any'
})
export class FormLoginInit {
  // inject
  private readonly _formBuilder = inject(NonNullableFormBuilder)

  groupLogin (): FormGroup<FormLogin> {
    return this._formBuilder.group({
      email: [''],
      password: ['']
    })
  }
}
