import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  names = 'Jack Jaramillo'

  handleNameChange (value: string): void {
    this.names = value
  }
}
