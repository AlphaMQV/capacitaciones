import { Component, inject } from '@angular/core'
import { MyFirstService } from './services/my-first.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // inyección de dependencias
  private myFirstSvc = inject(MyFirstService)

  handleNameChange (value: string): void {
    this.myFirstSvc.names = value
  }

  get localVariable (): string {
    return this.myFirstSvc.names
  }

  get title (): string {
    return 'Angular 14'
  }
}
