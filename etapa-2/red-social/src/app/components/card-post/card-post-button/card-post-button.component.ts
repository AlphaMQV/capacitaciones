import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { MaterialModule } from 'src/app/material/material.module'

@Component({
  selector: 'app-card-post-button',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule
  ],
  templateUrl: './card-post-button.component.html',
  styleUrls: ['./card-post-button.component.scss']
})
export class CardPostButtonComponent {
  // input
  @Input() icon: string
  @Input() active: boolean = false

  // output
  @Output() send = new EventEmitter<void>()

  // --------------------- functions ---------------------

  handleClick (): void {
    this.send.emit()
  }
}
