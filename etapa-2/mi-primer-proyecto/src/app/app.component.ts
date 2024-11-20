import { Component, inject, OnInit } from '@angular/core'
import { MyFirstService } from './services/my-first.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // inyección de dependencias
  private myFirstSvc = inject(MyFirstService)

  localVariable: string = ''

  ngOnInit (): void {
    this.myFirstSvc.names$
      .subscribe((value) => {
        this.localVariable = value
      })
  }

  get title (): string {
    return 'Angular 14'
  }
}
