import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-card-post-button',
  templateUrl: './card-post-button.component.html',
  styleUrls: ['./card-post-button.component.scss']
})
export class CardPostButtonComponent {
  // input
  @Input() icon: string

  // output
  @Output() send = new EventEmitter<void>()

  // --------------------- functions ---------------------

  handleClick (): void {
    this.send.emit()
  }
}
