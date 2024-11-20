import { Component, inject, OnInit } from '@angular/core'
import { MyFirstService } from 'src/app/services/my-first.service'

@Component({
  selector: 'app-my-second',
  templateUrl: './my-second.component.html',
  styleUrls: ['./my-second.component.scss']
})
export class MySecondComponent implements OnInit {
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

  ngOnInit (): void {
    this.myFirstSvc.names$.subscribe((value: string) => {
      this.localVariable = value
    })
  }
}
