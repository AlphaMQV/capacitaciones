import { Component, inject, OnDestroy, OnInit } from '@angular/core'
import { User } from '@angular/fire/auth'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnDestroy {
  // inject
  private readonly _authService = inject(AuthService)

  private readonly _onDestroy$ = new Subject<void>()

  user: User | null = null

  ngOnInit (): void {
    this._authService.authState$
      .pipe(takeUntil(this._onDestroy$))
      .subscribe((user) => {
        this.user = user
      })
  }

  ngOnDestroy (): void {
    this._onDestroy$.next()
    this._onDestroy$.complete()
  }
}
