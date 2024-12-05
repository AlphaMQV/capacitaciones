import { Component, inject, OnDestroy, OnInit } from '@angular/core'
import { User } from '@angular/fire/auth'
import { FormControl, FormGroup } from '@angular/forms'
import { Subject, takeUntil } from 'rxjs'
import { FormPost } from 'src/app/interfaces/form-post.interface'
import { Post } from 'src/app/interfaces/post.interface'
import { AuthService } from 'src/app/services/auth.service'
import { ToastService } from 'src/app/services/toast.service'
import { errorControlString } from 'src/app/utils/error-control-string'
import { FormPostInit } from './helpers/form-post.init'
import { FormPostService } from './services/form-post.service'

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss']
})
export class CardPostComponent implements OnInit, OnDestroy {
// inject
  private readonly _authService = inject(AuthService)
  private readonly _formPostService = inject(FormPostService)
  private readonly _formPostInit = inject(FormPostInit)
  private readonly _toast = inject(ToastService)

  private readonly _onDestroy$ = new Subject<void>()

  private user: User | null = null

  private _formPost: FormGroup<FormPost>

  loading: boolean = false

  constructor () {
    this.initAllForms()
  }

  ngOnInit (): void {
    this.susbcribeUser()
  }

  ngOnDestroy (): void {
    this._onDestroy$.next()
    this._onDestroy$.complete()
  }

  // ------------------------- constructor -------------------------

  private initAllForms (): void {
    this._formPost = this._formPostInit.groupPost()
  }

  // ------------------------- oninit -------------------------

  private susbcribeUser (): void {
    this._authService.authState$
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(user => { this.user = user })
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
    // si no hay un usuario logeado, retorna
    if (!this.user) return
    try {
      // setear loading en true
      this.loading = true
      // obtener el valor del formulario
      const formValue: Post = this._formPost.getRawValue()
      // setear el id del usuario
      formValue.userid = this.user.uid
      // enviar el post al servicio
      await this._formPostService.addPost(formValue)
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
