import { inject, Injectable } from '@angular/core'
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms'
import { FormPost } from 'src/app/interfaces/form-post.interface'

@Injectable({
  providedIn: 'any'
})
export class FormPostInit {
  // inject
  private readonly _formBuilder = inject(NonNullableFormBuilder)

  groupPost (): FormGroup<FormPost> {
    return this._formBuilder.group({
      title: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(200)
      ]],
      body: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(500)
      ]],
      reactions: this._formBuilder.group({
        likes: [0],
        dislikes: [0]
      }),
      views: [0],
      userid: ['']
    })
  }
}
