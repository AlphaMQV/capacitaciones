import { Component, inject, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { FormPost } from 'src/app/interfaces/form-post.interface'
import { Post } from 'src/app/interfaces/post.interface'
import { PostService } from 'src/app/services/post.service'
import { ToastService } from 'src/app/services/toast.service'
import { errorControlString } from 'src/app/utils/error-control-string'
import { FormPostInit } from './helpers/form-post.init'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // inject
  private readonly _postService = inject(PostService)
  private readonly _formPostInit = inject(FormPostInit)
  private readonly _toast = inject(ToastService)

  private _formPost: FormGroup<FormPost>

  constructor () {
    this.initAllForms()
  }

  ngOnInit (): void {
  }

  // ------------------------- constructor -------------------------

  private initAllForms (): void {
    this._formPost = this._formPostInit.groupPost()
  }

  // ------------------------- functions -------------------------

  sendForm (): void {
    if (this.disabledSendPost) {
      this._toast.warning('El formulario es inválido')
      return
    }
    this.addPost()
  }

  private async addPost (): Promise<void> {
    try {
      const formValue: Post = this._formPost.getRawValue()
      await this._postService.addPost(formValue)
      this._toast.success('Post creado correctamente')
    } catch {
      this._toast.error('Error al crear el post')
    }
  }

  // ------------------------- helpers -------------------------

  get disabledSendPost (): boolean {
    return this._formPost.invalid
  }

  // ------------------------- getters -------------------------

  get _ctrlsFormPost (): FormPost {
    return this._formPost.controls
  }

  // ------------------------- errors -------------------------

  errorString (control: FormControl<string>): string {
    return errorControlString(control)
  }
}
