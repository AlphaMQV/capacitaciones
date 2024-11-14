import { Component, inject } from '@angular/core'
import { MyFirstService } from 'src/app/services/my-first.service'

@Component({
  selector: 'app-my-second',
  templateUrl: './my-second.component.html',
  styleUrls: ['./my-second.component.scss']
})
export class MySecondComponent {
  // input
  // output
  // injections
  private myFirstSvc = inject(MyFirstService)
  // constructor (
  //   private myFirstSvc: MyFirstService
  // ) {
  //   this.localVariable = this.myFirstSvc.names
  // }

  get localVariable (): string {
    return this.myFirstSvc.names
  }
}
