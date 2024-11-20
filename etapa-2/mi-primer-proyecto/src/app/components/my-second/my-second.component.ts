import { Component, inject, OnDestroy, OnInit } from '@angular/core'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { MyFirstService } from 'src/app/services/my-first.service'

@Component({
  selector: 'app-my-second',
  templateUrl: './my-second.component.html',
  styleUrls: ['./my-second.component.scss']
})
export class MySecondComponent implements OnInit, OnDestroy {
  // input
  // output
  // injections
  private myFirstSvc = inject(MyFirstService)
  // constructor (
  //   private myFirstSvc: MyFirstService
  // ) {
  //   this.localVariable = this.myFirstSvc.names
  // }

  localVariable: string = ''

  readonly names$ = this.myFirstSvc.names$

  private readonly _onDestroy$ = new Subject<void>()

  ngOnInit (): void {
    this.myFirstSvc.names$
      .pipe(
        takeUntil(this._onDestroy$)
      )
      .subscribe((value: string) => {
        this.localVariable = value
      })
  }

  ngOnDestroy (): void {
    this._onDestroy$.next()
    this._onDestroy$.complete()
  }
}
