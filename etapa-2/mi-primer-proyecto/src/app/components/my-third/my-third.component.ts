import { Component, OnInit } from '@angular/core'
import { BehaviorSubject, of, Subject } from 'rxjs'

@Component({
  selector: 'app-my-third',
  templateUrl: './my-third.component.html',
  styleUrls: ['./my-third.component.scss']
})
export class MyThirdComponent implements OnInit {
  // subject
  mySubject$ = new Subject<string>()
  // behavior subject
  myBehaviorSubject$ = new BehaviorSubject<number>(0)
  // of
  myOf$ = of({ name: 'John' })

  ngOnInit (): void {
    this.mySubject$
      .subscribe((value) => { console.log(value) })
    this.myBehaviorSubject$
      .subscribe((value) => { console.log(value) })
    this.myOf$
      .subscribe((value) => { console.log(value) })
  }

  emitSubject (): void {
    this.mySubject$.next('Jack')
  }

  emitBehaviorSubject (): void {
    this.myBehaviorSubject$.next(24)
  }

  emitOf (): void {
    this.myOf$ = of({ name: 'Jane' })
  }
}
