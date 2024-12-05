import { Component, inject, OnDestroy, OnInit } from '@angular/core'
import { User } from '@angular/fire/auth'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { AuthService } from 'src/app/services/auth.service'
import { ToastService } from 'src/app/services/toast.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnDestroy {
  // inject
  private readonly _authService = inject(AuthService)
  private readonly _toast = inject(ToastService)

  private readonly _onDestroy$ = new Subject<void>()

  user: User | null = null

  loading: boolean = true

  ngOnInit (): void {
    this._authService.user$
      .pipe(takeUntil(this._onDestroy$))
      .subscribe((user) => {
        this.user = user
        this.loading = false
      })
  }

  ngOnDestroy (): void {
    this._onDestroy$.next()
    this._onDestroy$.complete()
  }

  // --------------------------- Methods ---------------------------

  async logout (): Promise<void> {
    try {
      // sign out
      await this._authService.signOut()
      // mostrar mensaje de éxito
      this._toast.success('Sesión cerrada correctamente')
    } catch {
      this._toast.error('Error al cerrar sesión')
    }
  }
}
