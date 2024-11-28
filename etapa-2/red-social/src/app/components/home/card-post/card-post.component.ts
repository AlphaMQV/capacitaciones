import { Component, inject, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { FormPost } from 'src/app/interfaces/form-post.interface'
import { Post } from 'src/app/interfaces/post.interface'
import { PostService } from 'src/app/services/post.service'
import { ToastService } from 'src/app/services/toast.service'
import { errorControlString } from 'src/app/utils/error-control-string'
import { FormPostInit } from './helpers/form-post.init'

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss']
})
export class CardPostComponent implements OnInit {
// inject
  private readonly _postService = inject(PostService)
  private readonly _formPostInit = inject(FormPostInit)
  private readonly _toast = inject(ToastService)

  private _formPost: FormGroup<FormPost>

  loading: boolean = false

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
      // setear loading en true
      this.loading = true
      // obtener el valor del formulario
      const formValue: Post = this._formPost.getRawValue()
      // enviar el post al servicio
      await this._postService.addPost(formValue)
      // mostrar mensaje de éxito
      this._toast.success('Post creado correctamente')
      // resetear el formulario
      this.resetFormPost()
    } catch {
      this._toast.error('Error al crear el post')
    } finally {
      this.loading = false
    }
  }

  // ------------------------- helpers -------------------------

  get disabledSendPost (): boolean {
    return this._formPost.invalid || this.loading
  }

  private resetFormPost (): void {
    this._formPost.reset()
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
