import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly isVisible: boolean = true
  readonly isApplicate: boolean = false
  readonly items = ['Angular', 'React', 'Vue']

  readonly myClass = 'my-class'
  readonly myClasses: string[] = ['my-class', 'my-class-2']

  logMessage (): void {
    console.log('Hello, World!')
  }
}
